/** @format */

import React, { Fragment } from "react";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  const revisarPresupuesto = (presupuesto, restante) => {
    let cname;
    if (presupuesto / 4 > restante) {
      cname = "alert alert-danger";
    } else if (presupuesto / 2 > restante) {
      cname = "alert alert-warning";
    } else {
      cname = "alert alert-success";
    }

    return cname;
  };
  return (
    <Fragment>
      <div className="contenedor">
        <div className="alert alert-primary">Presupuesto: ${presupuesto}</div>
        <div className={revisarPresupuesto(presupuesto, restante)}>
          Restante: ${restante}
        </div>
      </div>
    </Fragment>
  );
};

export default ControlPresupuesto;
