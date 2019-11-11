import React, { Component } from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import Chroma from 'chroma-js';
class ColorBox extends Component{
    static defaultProps = {
        showMoreBtn:true
    }
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
        const {background,name,paletteid,id} = this.props;
        const {copied} = this.state;
        const isDarkColor = Chroma(background).luminance() <= 0.08;
        const isLight = Chroma(background).luminance() >= 0.05;
        
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{background:background}}>
                <div className={`copy-overlay ${copied && "show"}`} style={{background:background}}>
                    <div className="copymsg">
                    <h1 className={`overaly-text ${(isLight && 'darktext')}`}>copied!!</h1>
                    <p className={isLight && "darktext"}>{background}</p>
                    </div>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={isDarkColor && "lighttext"}>{name}</span>
                    </div>
                    <button className={`copy-button ${(isDarkColor && "lighttext")}`}>Copy</button>
                </div> 
                {this.props.showMoreBtn && <Link to={`/palette/${paletteid}/${id}`} onClick={(e)=>{e.stopPropagation()}}><span className={"see-more "+ (isLight && "darktext")}>More</span></Link>}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;