import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level:500};
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level){
        this.setState({
            level
        })
    }
    render(){
        let colorBoxes = this.props.palette.colors[this.state.level].map(color=>{
            return <ColorBox background={color}></ColorBox>
        })
        return(
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel}></Navbar>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette;