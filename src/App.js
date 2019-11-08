import React, { Component } from 'react';
import seedColors from './seedColor';
import Palette from './Palette';
import {generatePalette} from './colorhelper';
class App extends Component{
  render(){
    return(
      <div>
        <Palette palette={generatePalette(seedColors[2])}></Palette>
      </div>
    )
  }
}

export default App;
