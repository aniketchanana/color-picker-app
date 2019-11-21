import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import PaletteMetaForm from './PaletteMetaForm';
import styles from './Styles/PaletteFormNavStyles';

class PaletteFormNav extends Component{
  constructor(props){
    super(props);
    this.state = {open:false}
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }
  async showForm(){
    console.log(this.state);
    await this.setState({
      open:true
    })
  }
  hideForm(){
    this.setState({
      open:false
    })
  }
    render(){
        const {classes,open} = this.props;
        return(
            <div>
                <CssBaseline />
        <AppBar
          position='fixed'
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create a palette
            </Typography>
            
          </Toolbar>
          <div className={classes.navBtns}>
            
            <Link to="/">
                <Button variant="contained"
                color="secondary"
                className={classes.button}>Go Back</Button>
            </Link>

            <Button 
            variant="contained" 
            color="primary" 
            onClick={this.showForm}
            className={classes.button}>
                Save
            </Button>

            {this.state.open && <PaletteMetaForm
            palettes={this.props.palettes}
            handelSubmit={this.props.handelSubmit}
            open={this.state.showForm}
            hideForm={this.hideForm}
            ></PaletteMetaForm>}

            </div>
        </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
