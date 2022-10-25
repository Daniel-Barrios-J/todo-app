import React from "react";
import '../stylesheets/tarea.css';
import { AiOutlineCar } from "react-icons/ai";

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
        <AiOutlineCar className="tarea-icono" />
      </div>
    </div>
  );
}