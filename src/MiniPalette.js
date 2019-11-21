import React, { PureComponent } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './Styles/MiniPalettesStyle';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends PureComponent{
    constructor(props){
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }
    deletePalette(evt){
        evt.stopPropagation();
        this.props.openDialog(this.props.id);
        // console.log(this.props.id)
    }
    render(){
        const {paletteName,colors,classes,emoji,handelClick} = this.props;
        const miniColors = colors.map(color=>{
            return <div 
            key={color.name}
            className={classes.miniColor} 
            style={{backgroundColor:color.color}}></div>
        })
    return(
        <div className={classes.root} onClick={()=>handelClick(this.props.id)}>
            
            <div className={classes.colors}>
                <div className={classes.delete}>
                    <DeleteIcon
                    className={classes.deleteicon}
                    style={{transition:"0.3s all ease-in-out !important"}}
                    onClick={this.deletePalette}
                    ></DeleteIcon>
                </div>
                {miniColors}
            </div>
            <h5 className={classes.title}>
                {paletteName} 
            <span className={classes.emoji}>{emoji}</span> </h5>
        </div>
    )
    }
}
export default withStyles(styles)(MiniPalette);