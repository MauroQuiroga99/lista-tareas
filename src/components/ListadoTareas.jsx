import { useEffect } from "react";
import Tarea from "./Tarea";

const ListadoTareas = ({ tareas }) => {
  useEffect(() => {
    if (tareas.length > 0) console.log("Nuevo Paciente");
  }, [tareas]);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {tareas && tareas.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado tareas </h2>
          <p className="text-lg text-center mb-10 ">
            {" "}
            Administra tus {""}
            <span className="text-indigo-800 font-bold"> tareas </span>
          </p>
          {tareas.map((tarea) => (
            <Tarea key={tarea.id} tarea={tarea} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay tareas </h2>
          <p className="text-lg text-center mb-10 ">
            {" "}
            Comienza a agregar tareas{" "}
            <span className="text-indigo-800 font-bold">
              {" "}
              y aparecerán en este lugar tareas{" "}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoTareas;
