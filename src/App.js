/** @format */
import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);

  // actualizat el restante
  useEffect(() => {
    // agrega el nuevo presupuesto
    if (creargasto) {
      setGastos([...gastos, gasto]);
    }

    // resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante);
    // ponerle false creargasto
    setCrearGasto(false);
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className="container">
      <h1>Administrador de Gastos</h1>
      <div className="contenido-principal contenido">
        {mostrarpregunta ? (
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostrarPregunta={setMostrarPregunta}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
            </div>
            <div className="one-half column">
              <Listado
                gastos={gastos}
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
