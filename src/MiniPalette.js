import React from 'react';
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
const styles = {
    root:{
        backgroundColor:"white",
        borderRadius:"5px",
        overflow:"hidden",
        "&:hover":{
            cursor:"pointer"
        },
        width:"28%",
        padding:"1rem",
        margin:"1rem"
    },
    colors:{
        backgroundColor:"#dae1e4",
        width:"100%",
        height:"150px",
        // border:"2px solid black"
    },
    title:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"0",
        color:"black",
        paddingTop:"0.5rem",
        fontSize:"1rem",
        position:"relative"
    },
    emoji:{
        marginLeft:"0.5rem",
        marginRight:"1rem",
        fontSize:"1.5rem"
    },
    miniColor:{
        height:"25%",
        width:"20%",
        display:"inline-block",
        marginBottom:"-4px"
    },
    
};
function MiniPalette(props){
    const {paletteName,id,colors,classes,emoji} = props;
    const miniColors = colors.map(color=>{
        return <div 
        key={color.name}
        className={classes.miniColor} 
        style={{backgroundColor:color.color}}></div>
    })
    return(
        <div className={classes.root}>
            <div className={classes.colors}>
                {miniColors}
            </div>
            <h5 className={classes.title}>
                {paletteName} 
            <span className={classes.emoji}>{emoji}</span> </h5>
        </div>
        // <Link to={`/palette/${id}`}>
            
        // </Link>
    )
}

export default withStyles(styles)(MiniPalette);