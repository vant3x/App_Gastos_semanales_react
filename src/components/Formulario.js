import React from 'react';

class Formulario extends React.Component {

  // refs para los campos del formulario 
  nombreGastoRef = React.createRef();
  cantidadGastoRef = React.createRef();

  crearGasto = (e) => {
    // Prevenir el default
    e.preventDefault();
    
    // crear el objeto
    const gasto = {
      nombreGasto: this.nombreGastoRef.current.value,
      cantidadGasto: this.cantidadGastoRef.current.value
    }

    // agregarlo y enviarlo por props
    this.props.agregarGasto(gasto);

    // resetear el formulario (opcional)
    e.currentTarget.reset();  
  } 
  render() {
    return(
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gatos aquí</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input 
            className="u-full-width"
            placeholder="Ej. Transporte"
            ref={this.nombreGastoRef}
            type="text" 
          />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input 
            className="u-full-width"
            placeholder="Ej. 300"
            ref={this.cantidadGastoRef}
            type="text" 
          />
        </div>

        <input 
          type="submit" 
          className="button-primary u-full-width"
          value="Agregar"
        />

      </form>
    )
  }
}

export default Formulario;