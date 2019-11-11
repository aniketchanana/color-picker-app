import React, { Component } from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class NavBar extends Component{
    static defaultProps = {
        show:true
    }
    constructor(props){
        super(props);
        this.state = {format:"hex",open:false};
        this.handelChange = this.handelChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }
    async handelChange(evt){
        await this.setState({
            format:evt.target.value,
            open:true
        })
        this.props.handelChange(this.state.format);
    }
    closeSnackBar(){
        this.setState({
            open:false
        })
    }
    render(){
        return(
            <header className="Navbar">
                <div className="logo">
                    <Link to="/">Aniket Color Picker</Link>
                </div>
                {this.props.show && <div className="slider-container">
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
                </div>}

                <div className="select-container">
                <Select
                value={this.state.format}
                onChange={this.handelChange}>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
                </div>

                <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={this.state.open}
                autoHideDuration={2000}
                onClose={this.closeSnackBar}
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Format changed to {this.state.format.toUpperCase()}</span>}
                action={[
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={this.closeSnackBar}
                >
                    <CloseIcon />
                </IconButton>,
                ]}
            />
            </header>
        )
    }
}

export default NavBar;