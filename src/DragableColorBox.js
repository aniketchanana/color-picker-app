import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root:{
        height:"25%",
        width: "20%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        
    }
}
class DragableColorBox extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div 
            className={classes.root}
            style={{background:this.props.color}}>
                {this.props.name}
            </div>
        );
    }
}

export default withStyles(styles)(DragableColorBox);
