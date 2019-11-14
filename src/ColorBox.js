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
    },
    seeMore:{
        background: "rgba(255,255,255,0.3)",
        position: "absolute",
        right: "0",
        bottom: "0",
        padding: "4px",
        textTransform: "uppercase",
        color:(props)=> Chroma(props.background).luminance() >= 0.4 ? "black" : "white",
    },
    ColorBox:{
        width: "20%",
        height: (props)=>{return props.showMoreBtn?"25%":"50%"},
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover button":{
            opacity:"1"
        }
    },
    copyButton:{
        color:(props)=> Chroma(props.background).luminance() >= 0.4 ? "black" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        lineHeight: "30px",
        texTransform: "uppercase",
        border: "none",
        opacity: "0",
        transition: "0.5s ease"
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
                <div className={classes.ColorBox} style={{background:background}}>
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
                    <button className={classes.copyButton}>Copy</button>
                </div> 
                {this.props.showMoreBtn && <Link to={`/palette/${paletteid}/${id}`} onClick={(e)=>{e.stopPropagation()}}><span className={classes.seeMore}>More</span></Link>}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);