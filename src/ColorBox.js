import React, { Component } from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends Component{
    constructor(){
        super();
        this.state = {
            copied:false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({copied:true},()=>{
            setTimeout(()=>this.setState({copied:false}),1000);
        });
    }
    render(){
        const {background,name} = this.props;
        const {copied} = this.state;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{background:background}}>
                <div className={`copy-overlay ${copied && "show"}`} style={{background:background}}>
                    <div className="copymsg">
                    <h1 className="overaly-text">copied!!</h1>
                    <p>{background}</p>
                    </div>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;