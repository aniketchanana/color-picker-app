import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import MiniPalette from "./MiniPalette";
import styles from './Styles/PaletteListStyle';
import {Link} from "react-router-dom";
class PaletteList extends Component {
    constructor(){
        super();
        this.goToPalette = this.goToPalette.bind(this);
    }
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const {palettes,classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Color Palettes</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map((palette)=>{
                            return <MiniPalette 
                            deletePalette={this.props.deletePalette}
                            id={palette.id}
                            key={palette.id}
                            {...palette}
                            handelClick={()=>{this.goToPalette(palette.id)}}></MiniPalette>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
// palette
export default withStyles(styles)(PaletteList);
