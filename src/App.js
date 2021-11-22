import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario.js";

function App() {
  //Arregle de Citas
  const [citas, guardarCitas] = useState([]);

  //Funcionar para guardar citas
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">Citas agregadas</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
