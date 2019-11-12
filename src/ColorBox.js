import React, { Component } from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import Chroma from 'chroma-js';
import {withStyles} from '@material-ui/styles';

const styles = {
    copyText:{
        color:(props)=> Chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    },
    colorName:{
        color:(props)=> Chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    }
}
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
        const {background,name,paletteid,id,classes} = this.props;
        const {copied} = this.state;
        
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={"ColorBox"} style={{background:background}}>
                <div className={`copy-overlay ${copied && "show"}`} style={{background:background}}>
                    <div className="copymsg">
                    <h1 className={`overaly-text ${classes.copyText}`}>copied!!</h1>
                    <p className={classes.copyText}>{background}</p>
                    </div>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={`copy-button ${classes.copyText}`}>Copy</button>
                </div> 
                {this.props.showMoreBtn && <Link to={`/palette/${paletteid}/${id}`} onClick={(e)=>{e.stopPropagation()}}><span className={"see-more "+ (classes.copyText)}>More</span></Link>}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);