/** @format */

import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  // state de la cantidad del presupuesto
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // definir presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
    //el 10 es para asegurarse de que la funcion retorne un numero del sistema numerico decimal
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    // validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    setTimeout(() => {
      setError(false);
    }, 3000);

    // agregamos el presupuesto
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };
  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu Presupuesto"
          onChange={definirPresupuesto}
        />
        {error ? <Error mensaje="El presupuesto no es válido" /> : null}
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
