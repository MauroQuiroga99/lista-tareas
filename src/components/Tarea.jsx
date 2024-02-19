const Tarea = ({ tarea }) => {
  const { id, titulo, descripcion, estado } = tarea;

  return (
    <div>
      <div className=" bg-white mx-5 my-10 shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Titulo: {""}
          <span className="font-normal normal-case"> {titulo} </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Descripcion: {""}
          <span className="font-normal normal-case">{descripcion}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Estado: {""}
          <span className="font-normal normal-case">{estado}</span>
        </p>
      </div>
    </div>
  );
};

export default Tarea;
