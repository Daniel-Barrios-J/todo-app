import React, {useState} from "react";
import { FormularioTareas } from "./formulario";
import { Tarea } from './tarea';
import '../stylesheets/listaTareas.css';

export const Lista = () => {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    } else {
      alert('ingresa algo, bobo');
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return(
    <>
      <FormularioTareas onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea)=>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
};