import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietrario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
        />

        <label>Fecha</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
        />

        <label>Nombre Dueño</label>
        <textarea className="u-full-width" name="intomas"></textarea>

        <button type="submit" className="u-full-width button-primary">
            Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
