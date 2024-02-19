import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoTareas from "./components/ListadoTareas";

function App() {
  const [tareas, setTareas] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <div className="mt-12 md:flex">
        <Formulario tareas={tareas} setTareas={setTareas} />
        <ListadoTareas tareas={tareas} />
      </div>
    </div>
  );
}

export default App;
