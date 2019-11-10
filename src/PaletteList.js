import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import MiniPalette from "./MiniPalette";

const styles = {
    root:{
        backgroundColor:"blue",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        width:"80%",
    },
    nav:{
        width:"100%",
        color:"white",
        margin:"1rem"
    },
    palettes:{
        display:"flex",
        flexWrap:"wrap",
    }
}
class PaletteList extends Component {
    render() {
        const {palettes,classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                    <h1>Color Palettes</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map((palette)=>{
                            return <MiniPalette 
                            key={palette.id}
                            {...palette}></MiniPalette>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
// palette
export default withStyles(styles)(PaletteList);
