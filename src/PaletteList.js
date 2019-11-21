import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import MiniPalette from "./MiniPalette";
import styles from './Styles/PaletteListStyle';
import {Link} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
class PaletteList extends Component {
    constructor(){
        super();
        this.state = {
            dialogOpen:false,
            deletingid:""
        }
        this.goToPalette = this.goToPalette.bind(this);
    }
    openDialog = (id)=>{
        this.setState({
            dialogOpen:true,
            deletingid:id
        })
    }
    closeDialog = ()=>{
        this.setState({
            dialogOpen:false,
            deletingid:""
        })
    }
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    handelDelete = ()=>{
        this.props.deletePalette(this.state.deletingid);
        this.closeDialog();
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
                            // deletePalette={this.props.deletePalette}
                            openDialog={this.openDialog}
                            id={palette.id}
                            key={palette.id}
                            {...palette}
                            handelClick={this.goToPalette}></MiniPalette>
                        })}
                    </div>
                </div>
                <Dialog
                open={this.state.dialogOpen}
                onClose={this.closeDialog}
                >
                    <DialogTitle>
                        Delete this palette ?
                        <List>

                            <ListItem button
                            onClick={this.handelDelete}
                            >
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor:blue[100],color:blue[500]}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>								
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='Delete'/>
                            </ListItem>

                            <ListItem button
                            onClick={this.closeDialog}
                            >
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor:red[100],color:red[500]}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>								
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary='cancel'/>
                            </ListItem>

                        </List>
                    </DialogTitle>
                </Dialog>
            </div>
        );
    }
}
// palette
export default withStyles(styles)(PaletteList);
