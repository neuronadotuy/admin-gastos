/** @format */

import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import Gasto from "./Gasto";

const Listado = ({ gastos, presupuesto, restante }) => {
  return (
    <div className="gastos-realizados">
      {/* <h2>Lista de Gastos</h2> */}
      <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
      {gastos.map((gasto) => {
        return <Gasto key={gasto.id} gasto={gasto} />;
      })}
    </div>
  );
};

export default Listado;
