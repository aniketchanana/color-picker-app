import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import styles from './Styles/ColorBoxStyle'

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
                <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{background:background}}>
                    <div className={classes.copymsg}>
                    <h1 className={classes.overalyText}>copied!!</h1>
                    <p className={classes.copyText}>{background}</p>
                    </div>
                </div>
                <div className="copy-container">
                    <div className={classes.boxContent}>
                        <span>{name}</span>
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