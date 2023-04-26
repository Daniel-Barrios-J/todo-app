import React from "react";
import '../stylesheets/tarea.css';


export const Tarea = ({ texto, completada, id, completarTarea, eliminarTarea }) => {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className="tarea-texto" 
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}>
          <img className="tarea-icono" src="https://img.icons8.com/color/48/null/trash--v1.png"/>
      </div>
    </div>
  );
}