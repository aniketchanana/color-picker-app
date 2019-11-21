import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from 'react-material-ui-form-validator';
import DragableColorList from './DragableColorList';
import arrayMove from "array-move";
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './Styles/NewPaletteformstyles'
import seedColors from './seedColor';
class NewPaletteForm extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      open:true,
      colors:[...seedColors[0].colors],
      currentColor:"teal",
      newColorName:""
    }
    this.addNewColor = this.addNewColor.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }
  clearPalette(){
    this.setState({
      colors:[]
    })
  }
  addRandomColor(){
    const allcolors = this.props.palettes.map(p=>p.colors).flat();
    var rand = Math.floor(Math.random() * allcolors.length);
    let randomColor = allcolors[rand];
    let isDuplicate = true;
    while(isDuplicate)
    {
      rand = Math.floor(Math.random() * allcolors.length);
      let randomColor = allcolors[rand];
      isDuplicate = this.state.colors.some(color => color.name === randomColor.name)
    }
    this.setState({
      colors:[...this.state.colors,randomColor]
    })
  }
  handelSubmit(newPalette){
    console.log(newPalette);
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g,"-");
    newPalette.colors = this.state.colors;
    // console.log(newPalette);
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }
  addNewColor(newColor){
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

  componentDidMount(){
    ValidatorForm.addValidationRule('isColorNameUnique',(value)=>{
      return  this.state.colors.every(({name})=> name.toLowerCase() !== value.toLowerCase());
    })
    ValidatorForm.addValidationRule('isColorUnique',(value)=>{
      return  this.state.colors.every(({color})=> color.toLowerCase() !== this.state.currentColor.toLowerCase());
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
  onSortEnd = ({oldIndex,newIndex})=>{
    // console.log(arrayMove(this.state.colors,oldIndex,newIndex));
    this.setState(()=>{
      return {colors:arrayMove(this.state.colors,oldIndex,newIndex)}
    });
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const paletteIsFull = this.state.colors.length===20;
    return (
      <div className={classes.root}>
        <PaletteFormNav
        classes={classes}
        open={open}
        palettes={this.props.palettes}
        handelSubmit={this.handelSubmit}
        handleDrawerOpen={this.handleDrawerOpen}
        ></PaletteFormNav>
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
          <div className={classes.container}>
          <Typography variant='h4' gutterBottom >Design Your Palette</Typography>
          <div className={classes.buttons}>
            <Button 
            className={classes.button}
            onClick={this.clearPalette}
            variant='contained'
            color='secondary'>
              Clear Palette
            </Button>
            <Button
            className={classes.button}
            onClick={this.addRandomColor}
            variant='contained' 
            disabled={paletteIsFull}
            color='primary'>
              Random Color
            </Button>
          </div>

          <ColorPickerForm
          addNewColor={this.addNewColor}
          paletteIsFull={paletteIsFull}
          colors={this.state.colors}
          ></ColorPickerForm>
        </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        > 
        <div className={classes.drawerHeader} />

          <DragableColorList
          colors={this.state.colors}
          deleteColor={this.deleteColor}
          axis="xy"
          onSortEnd={this.onSortEnd}
          ></DragableColorList>

        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);