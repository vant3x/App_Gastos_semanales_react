import React, { Component } from 'react';
import '../css/App.css';

// components
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
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

    // restar al presupuesto 
    this.restarPresupuesto(gasto.cantidadGasto)

    // ponerlo en state
    this.setState({
      gastos
    })

  }

  // restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad =>  {
    // leer el gasto
    let restar = Number(cantidad);

    // Tomar una copia del state actual
    let restante = this.state.restante;

    // lo restamos
    restante -= restar;

    // agregamos el nuevo state
    this.setState({
      restante
    });
    console.log(restante);

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
             <ControlPresupuesto
               presupuesto={this.state.presupuesto}
               restante={this.state.restante}
             />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
