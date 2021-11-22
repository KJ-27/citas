import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario.js";
import Cita from "./components/Cita";

function App() {
  //Arregle de Citas
  const [citas, guardarCitas] = useState([]);

  //Funcionar para guardar citas
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Eliminar Cita por ID
  const elimarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={elimarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
