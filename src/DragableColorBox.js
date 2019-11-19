import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root:{
        height:"25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover svg":{
            color:"white",
            transform:"scale(1.2)"
        }
    },
    boxContent:{
        height:"100%",
        padding: "10px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"flex-end",
        color:"rgba(0,0,0,0.5)",
    },
    deleteIcon:{
        transition:"0.2s ease-in-out"
    }
}
class DragableColorBox extends Component {
    render() {
        const {classes,handelClick,name,color} = this.props;
        return (
            <div 
            className={classes.root}
            style={{background:color}}>
                <div className={classes.boxContent}>
                    <span>{name}</span>
                    <DeleteIcon
                    onClick={handelClick}
                    className={classes.deleteIcon}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(DragableColorBox);
