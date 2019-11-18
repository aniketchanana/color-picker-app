import React, { Component } from 'react';
import seedColors from './seedColor';
import Palette from './Palette';
import {generatePalette} from './colorhelper';
import {Route,Switch,Redirect} from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
class App extends Component{
  constructor(){
    super();
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" render={(routeProps)=>{return <PaletteList {...routeProps} palettes={seedColors}/>  }}></Route>
          <Route exact path="/palette/new" render={()=>{return <NewPaletteForm></NewPaletteForm>}}></Route>
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
