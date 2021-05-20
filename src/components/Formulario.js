/** @format */

import React, { useState } from "react";
import shortid from "shortid";
import Error from "./Error";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombregasto, setNombreGasto] = useState("");
  const [cantidadgasto, setCantidadGasto] = useState("");
  const [error, setError] = useState(false);

  // cuando el usuario agrega el gasto
  const agregarGasto = (e) => {
    e.preventDefault();
    // validar
    if (
      nombregasto.trim() === "" ||
      cantidadgasto < 1 ||
      isNaN(cantidadgasto)
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    setError(false);
    // construir el gasto
    const gasto = {
      nombre: nombregasto,
      cantidad: cantidadgasto,
      id: shortid.generate(),
    };

    //pasar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);

    // reset formulario
    setNombreGasto("");
    setCantidadGasto("");
  };

  return (
    <form action="" onSubmit={agregarGasto}>
      {/* <h2>Agregar Gastos:</h2> */}
      <div className="campo">
        {/* <label htmlFor="">Nombre</label> */}
        <input
          type="text"
          className="u-full-width"
          placeholder="En que vas a usar tu dinero?"
          value={nombregasto}
          onChange={(e) => {
            setNombreGasto(e.target.value);
          }}
        />
      </div>
      {/* <label htmlFor="">Cantidad</label> */}
      <input
        type="number"
        className="u-full-width"
        placeholder="Cuanto usarás? ej. $300"
        value={cantidadgasto}
        onChange={(e) => {
          setCantidadGasto(parseInt(e.target.value, 10));
        }}
      />
      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
      <input type="submit" className="u-full-width button-primary" />
    </form>
  );
};

export default Formulario;
