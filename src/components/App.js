import React, { Component } from 'react';
// components
import Header from './Header';
import '../css/App.css';

class App extends Component {
  render() {
    return (  
      <div className="App container">
        <Header
          titulo='Gasto Semanal'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              1
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
