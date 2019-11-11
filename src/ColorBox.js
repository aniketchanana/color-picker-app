import React, { Component } from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
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
                {this.props.showMoreBtn && <Link to={`/palette/${paletteid}/${id}`} onClick={(e)=>{e.stopPropagation()}}><span className="see-more">More</span></Link>}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;