import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario.js";
import Cita from "./components/Cita";

function App() {
  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arregle de Citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  //Funcionar para guardar citas
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Eliminar Cita por ID
  const elimarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Mensaje Condicional
  const titulo = citas.length === 0 ? "No Hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
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
