import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './Styles/MiniPalettesStyle';
function MiniPalette(props){
    const {paletteName,colors,classes,emoji} = props;
    const miniColors = colors.map(color=>{
        return <div 
        key={color.name}
        className={classes.miniColor} 
        style={{backgroundColor:color.color}}></div>
    })
    return(
        
        <div className={classes.root} onClick={props.handelClick}>
            <div className={classes.colors}>
                {miniColors}
            </div>
            <h5 className={classes.title}>
                {paletteName} 
            <span className={classes.emoji}>{emoji}</span> </h5>
        </div>
        
            
        
    )
}

export default withStyles(styles)(MiniPalette);