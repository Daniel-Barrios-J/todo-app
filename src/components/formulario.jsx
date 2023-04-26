import React, { useState } from "react";
import '../stylesheets/formulario.css';
import { v4 as uuidv4 } from 'uuid';

export const FormularioTareas = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva);
    setInput('');
  };

  return(
    <form 
      className="tarea-formulario"
      onSubmit={manejarEnvio}>
      <input
      type="text"
      className="tarea-input"
      placeholder="Agrega tus pendientes...📝"
      name='texto'
      value={input}
      onChange={manejarCambio}
      />
      <button 
        className="tarea-boton">
        Agregar
      </button>
    </form>
  );
};