import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level:500,format:"hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level){
        this.setState({
            level
        })
    }
    changeFormat(value){
        this.setState({
            format:value
        })
    }
    render(){
        const {paletteName,emoji,id} = this.props.palette;

        let colorBoxes = this.props.palette.colors[this.state.level].map(color=>{
            return <ColorBox background={color[this.state.format]} 
            name={color.name}
            key={color.id}
            id={color.id}
            paletteid={id}></ColorBox>
        })
        return(
            <div className="Palette">
                <Navbar 
                level={this.state.level} 
                changeLevel={this.changeLevel}
                handelChange={this.changeFormat}></Navbar>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter 
                paletteName={paletteName}
                emoji={emoji}
                ></PaletteFooter>
            </div>
        )
    }
}

export default Palette;