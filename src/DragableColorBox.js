import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from "react-sortable-hoc";
import styles from './Styles/DragableColorBoxStyle';
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

export default SortableElement(withStyles(styles)(DragableColorBox));
