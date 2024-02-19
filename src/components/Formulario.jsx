import React, { useState, useEffect } from "react";

const Formulario = ({ tareas, setTareas }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("activo");

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSumit = (e) => {
    e.preventDefault();

    const objetoTarea = {
      titulo,
      descripcion,
      estado,
    };

    objetoTarea.id = generarId();
    setTareas([...tareas, objetoTarea]);

    setTitulo("");
    setDescripcion("");
    setEstado("activo");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center"> Seguimiento tareas </h2>

      <p className="mt-5 text-lg text-center mb-5">
        Añade tareas y {""}
        {""}
        <span className=" text-indigo-800 font-bold ">Administralas</span>
      </p>

      <form
        onSubmit={handleSumit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="titulo"
            className=" block text-indigo-800 uppercase font-bold"
          >
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo de la tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md "
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="descripción"
            className=" block text-indigo-800 uppercase font-bold"
          >
            Descripcion
          </label>
          <input
            id="descripcion"
            type="text"
            placeholder="Descripcion de la tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="estado"
            className=" block text-indigo-800 uppercase font-bold"
          >
            Estado
          </label>
          <select
            className="border-2  p-2 mt-2 placeholder-gray-500 rounded-md"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="activo">Activo</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>

        <input
          type="submit"
          className=" bg-indigo-800 w-full p-3 text-white uppercase font-bold hover:bg-indigo-950 cursor-pointer transition-colors"
          value={"Agregar Tarea"}
        />
      </form>
    </div>
  );
};

export default Formulario;
