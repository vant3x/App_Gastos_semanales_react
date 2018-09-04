import React from 'react';

class Formulario extends React.Component {
  render() {
    return(
      <form>
        <h2>Agrega tus gatos aquí</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input 
            className="u-full-width"
            placeholder="Ej. Transporte"
            type="text" 
          />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input 
            className="u-full-width"
            placeholder="Ej. 300"
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