import React, { Component } from 'react';
// import classNames from "classnames";
// import { withStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
// import DragableColorList from './DragableColorList';
// import arrayMove from "array-move";
// import PaletteFormNav from './PaletteFormNav';
const styles = {
  picker:{
    width:"100% !important",
    marginTop:"2rem",
  },
  addColor:{
    width:"100%",
    padding:"0.4rem",
    marginTop:"1rem",
    fontSize:"1.2rem"
  },
  colorNameInput:{
    width:"100%",
    height:"60px"
  }
}
class ColorPickerForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = {currentColor:"teal",newColorName:""};
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    updateCurrentColor(newColor){  
        this.setState({
          currentColor:newColor.hex
        },()=>{
          console.log(this.state.currentColor)
        })
    }
    handelChange(evt){
        this.setState({
          [evt.target.name]:evt.target.value
        })
    }
    handelSubmit(){
        const newColor = {
            color:this.state.currentColor,
            name:this.state.newColorName
        }
        this.props.addNewColor(newColor);
        this.setState({
            newColorName:""
        })
    }
    componentDidMount(){
      // console.log(this.props);
        ValidatorForm.addValidationRule('isColorNameUnique',(value)=>{
          // console.log(this.props);
          return  this.props.colors.every(({name})=> name.toLowerCase() !== value.toLowerCase());
        })
        ValidatorForm.addValidationRule('isColorUnique',(value)=>{
          // console.log(this.props);
          return  this.props.colors.every(({color})=> color.toLowerCase() !== this.state.currentColor.toLowerCase());
        })
      }
    render() {
        const {paletteIsFull,classes} = this.props;
        const {newColorName,currentColor} = this.state;
        return (
            <div>
                <ChromePicker
                className={classes.picker}
            color={currentColor}
            onChangeComplete={newColor => this.updateCurrentColor(newColor)}
          />
          <ValidatorForm
          onSubmit={this.handelSubmit}>

            <TextValidator
            margin="normal"
            className={classes.colorNameInput}
            name="newColorName"
            variant="filled"
            label="Enter color name"
            value={newColorName}
            onChange={this.handelChange}
            validators={['required','isColorNameUnique','isColorUnique']}
            errorMessages={['this field is required', 'Color should be unique in palette','color should be unique']}
            ></TextValidator>


            <Button
            className={classes.addColor}
            type="submit"
            style={{backgroundColor:paletteIsFull?"grey":this.state.currentColor}}
            variant='contained' 
            color="primary"
            disabled={paletteIsFull}
            >
            {paletteIsFull?"Palette is full":"Add Color"}
            </Button>
            </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm);
