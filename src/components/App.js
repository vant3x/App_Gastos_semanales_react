import React, { Component } from 'react';
import '../css/App.css';

// components
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
// helpers
import {validarPresupuesto} from '../helper';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      presupuesto: '',
      restante: '',
      gastos: {}
    }
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cuál es el presupuesto');

    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    } else {
      console.log('Presupuesto no valido');
      this.obtenerPresupuesto();
    }
  }

  // Agregar un nuevo gasto al state

  agregarGasto = gasto => {
    // tomar una copia del state actual 
    const gastos = {...this.state.gastos};

    // agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;

    // ponerlo en state
    this.setState({
      gastos
    })

  }
  render() {
    return (  
      <div className="App container">
        <Header
          titulo='Gasto Semanal'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario 
                agregarGasto = {this.agregarGasto}
              />
            </div>
            <div className="one-half column">
             <Listado
              gastos={this.state.gastos}
             />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
