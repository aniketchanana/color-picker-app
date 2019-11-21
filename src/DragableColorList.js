import React, { Component } from 'react';
import {SortableContainer} from "react-sortable-hoc";
import DragableColorBox from './DragableColorBox'
class DragableColorList extends Component {
    render() {
        return (
            <div style={{height:"100%"}}>
                {this.props.colors.map((color,i)=>{
                    return <DragableColorBox
                    index={i}
                    key={color.name}
                    handelClick={()=> this.props.deleteColor(color.name)}
                    name={color.name} 
                    color={color.color}></DragableColorBox>
                })}
            </div>
        );
    }
}

export default SortableContainer(DragableColorList);
