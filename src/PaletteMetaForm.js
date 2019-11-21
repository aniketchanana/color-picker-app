import React ,{Component}from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Dialog from '@material-ui/core/Dialog';
import {Picker} from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class PaletteMetaForm extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            open:true,
            newPaletteName:"",
            emojiOpen:false
        }
        this.handelChange = this.handelChange.bind(this);
    }
    handleClickOpen = () => {
        this.setState({
            open:true
        })
        this.props.handelSubmit(this.state.newPaletteName)
    }
    showEmojiPicker = ()=>{
        this.setState({
            emojiOpen:true
        })
    }
    savePalette = (emoji)=>{
        const newPalette = {
            paletteName:this.state.newPaletteName,
            emoji:emoji.native
        }
        this.props.handelSubmit(newPalette);
    }
    handleClose = () => {
        this.setState({
            open:false
        })
        this.props.hideForm();
    }
    componentDidMount(){
        ValidatorForm.addValidationRule("isPaletteNameUnique",(value)=>{
            return this.props.palettes.every(({paletteName})=> paletteName.toLowerCase() !== value.toLowerCase())
        })
    }
    handelChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    render(){
        return (
            <div>
            <Dialog open={this.state.emojiOpen}>
                <DialogTitle
                id="form-dialog-title"
                >Choose a Palette emoji</DialogTitle>
                <Picker
                title="Pick a Palette emoji"
                onSelect={this.savePalette}
                ></Picker>
            </Dialog>
              <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose a palette name</DialogTitle>
                <ValidatorForm
                  onSubmit={this.showEmojiPicker}
                  >
                <DialogContent>
                  <DialogContentText>
                    Please enter a name for your palette
                  </DialogContentText>
                    <TextValidator 
                    label="Palette Name"
                    value={this.state.newPaletteName}
                    name="newPaletteName"
                    fullWidth
                    margin="normal"
                    onChange={this.handelChange}
                    validators={["required","isPaletteNameUnique"]}
                    errorMessages={["Enter Palette Name","palette name taken"]}
                    ></TextValidator>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                    >Save Palette</Button>
                </DialogActions>
                </ValidatorForm>
              </Dialog>
              </div>
          );
    }
}

export default PaletteMetaForm;
  