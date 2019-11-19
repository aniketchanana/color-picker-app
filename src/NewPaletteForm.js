import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import DragableColorBox from './DragableColorBox';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height:"calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      open:true,
      currentColor:"teal",
      newColorName:"",
      newPaletteName:"",
      colors:[{color:"blue",name:"blue"}]
    }
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handelSubmit(){
    let newName = this.state.newPaletteName
    const newPalette = {
      paletteName:newName,
      id:newName.toLowerCase().replace(/ /g,"-"),
      colors:this.state.colors
    }
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }
  addNewColor(){
    const newColor = {
      color:this.state.currentColor,
      name:this.state.newColorName
    }
    this.setState({
      colors:[...this.state.colors,newColor],
      newColorName:""
    })
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor(newColor){
    this.setState({
      currentColor:newColor.hex
    })
  }
  componentDidMount(){
    console.log(this.props.palettes);
    ValidatorForm.addValidationRule('isColorNameUnique',(value)=>{
      return  this.state.colors.every(({name})=> name.toLowerCase() !== value.toLowerCase());
    })
    ValidatorForm.addValidationRule('isColorUnique',(value)=>{
      return  this.state.colors.every(({color})=> color.toLowerCase() !== this.state.currentColor.toLowerCase());
    })
    ValidatorForm.addValidationRule("isPaletteNameUnique",(value)=>{
      return this.props.palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase())
    })

  }
  handelChange(evt){
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }

  deleteColor(colorName){
    this.setState({
      colors:this.state.colors.filter(color => color.name !== colorName)
    })
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Persistent drawer
            </Typography>

            <ValidatorForm
            onSubmit={this.handelSubmit}
            >
              <TextValidator 
              label="Palette Name"
              value={this.state.newPaletteName}
              name="newPaletteName"
              onChange={this.handelChange}
              validators={["required","isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name","palette name taken"]}
              ></TextValidator>

              <Button 
              variant="contained" 
              color="primary"
              type="submit"
              >Save Palette</Button>

            </ValidatorForm>

          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant='h4'>Design Your Palette</Typography>
          <div>
            <Button variant='contained' color='secondary'>
              Clear Palette
            </Button>
            <Button variant='contained' color='primary'>
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={newColor => this.updateCurrentColor(newColor)}
          />
          <ValidatorForm
          onSubmit={this.addNewColor}>

            <TextValidator
            name="newColorName"
            label="Enter color name"
            value={this.state.newColorName}
            onChange={this.handelChange}
            validators={['required','isColorNameUnique','isColorUnique']}
            errorMessages={['this field is required', 'Color should be unique in palette','color should be unique']}
            ></TextValidator>


            <Button
            type="submit"
            style={{backgroundColor:this.state.currentColor}}
            variant='contained' 
            color="primary"
            >
            Add Color
          </Button>
          </ValidatorForm>
          
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        > 
        <div className={classes.drawerHeader} />
          {this.state.colors.map((color)=>{
            return <DragableColorBox 
            key={color.name}
            handelClick={()=> this.deleteColor(color.name)}
            name={color.name} 
            color={color.color}></DragableColorBox>
          })}
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);