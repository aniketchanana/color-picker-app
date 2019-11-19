import React, { Component } from 'react';
import seedColors from './seedColor';
import Palette from './Palette';
import {generatePalette} from './colorhelper';
import {Route,Switch,Redirect} from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {palette:seedColors};
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  savePalette(newPalette)
  {
    console.log(newPalette);
    this.setState({palette:[...this.state.palette,newPalette]})
  }
  findPalette(id){
    return this.state.palette.find(function(palette){
      return palette.id === id;
    })
  }
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" render={(routeProps)=>{return <PaletteList {...routeProps} palettes={this.state.palette}/>  }}></Route>
          <Route exact path="/palette/new" render={(routeProps)=>{return <NewPaletteForm {...routeProps} savePalette={this.savePalette} palettes={this.state.palette}></NewPaletteForm>}}></Route>
          <Route 
          exact 
          path="/palette/:id" 
          render={(routeProps)=>{return <Palette 
          palette={generatePalette(this.findPalette(routeProps.match.params.id))}
          ></Palette>}}></Route>

          <Route exact 
          path="/palette/:paletteId/:colorId" 
          render={(routeProps)=>{return <SingleColorPalette
          colorid={routeProps.match.params.colorId}
          paletteid={routeProps.match.params.paletteId}
          palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
          ></SingleColorPalette>}}></Route>

          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    )
  }
}

export default App;
