import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom'
class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this.state = {
            format:"hex"
        }
        console.log(this.props);
        this._shades = this.generateShades(this.props.palette.colors,this.props.colorid);
        this.changeFormat = this.changeFormat.bind(this);
        console.log(this._shades);
    }
    async changeFormat(value){
        await this.setState({
            format:value
        })
    }
    generateShades(allcolors,colorid){
        let allshades = [];
        let a = Object.keys(allcolors);
        for(let i=0;i<a.length;i++)
        {
            let colorshade = allcolors[a[i]].find((color)=>{
                return color.id === colorid;
            })
            allshades.push(colorshade);
        }
        return allshades.slice(1);
    }
    render() {
        return (
            <div className="SingleColorPalette Palette">
                <Navbar 
                show={false}
                handelChange={this.changeFormat}></Navbar>
                <div className="Palette-colors">
                {
                    this._shades.map((shade)=>{
                        return <ColorBox
                        background={shade[this.state.format]}
                        id={shade.id}
                        name={shade.name}
                        key={shade.name}
                        paletteid={this.props.paletteid}
                        showMoreBtn={false}></ColorBox>
                    })
                }
                <div className="ColorBox GoBack">
                    <Link className='copy-button' to={`/palette/${this.props.palette.id}`}>Back</Link>
                </div>

                </div>
                <PaletteFooter 
                paletteName={this.props.palette.paletteName}
                emoji={this.props.palette.emoji}
                ></PaletteFooter>
            </div>
        );
    }
}

export default SingleColorPalette;