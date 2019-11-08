import React, { Component } from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import './Navbar.css';
class NavBar extends Component{
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
            </header>
        )
    }
}

export default NavBar;