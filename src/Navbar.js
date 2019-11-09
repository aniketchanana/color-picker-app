import React, { Component } from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import './Navbar.css';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {format:"hex"};
        this.handelChange = this.handelChange.bind(this);
    }
    async handelChange(evt){
        await this.setState({
            format:evt.target.value
        })
        this.props.handelChange(this.state.format);
    }
    render(){
        return(
            <header className="Navbar">
                <div className="logo">
                    <a href="#">Aniket Color Picker</a>
                </div>
                <div className="slider-container">
                    <span>Level : {this.props.level}</span>
                    <div className="slider">
                        <Slider 
                        defaultValue={this.props.level} 
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.props.changeLevel}
                        ></Slider>
                    </div>
                </div>

                <div className="select-container">
                <Select
                value={this.state.format}
                onChange={this.handelChange}>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgbA(255,255,255,1.0)</MenuItem>
                </Select>
                </div>
            </header>
        )
    }
}

export default NavBar;