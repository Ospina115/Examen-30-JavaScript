import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MainPage.css'
import IMCCalculator from './puntos/1punto.jsx'
import Gallery from './puntos/2punto.jsx'
import DynamicTable from './puntos/3punto.jsx'
import ApiDataList from './puntos/4punto.jsx'

function ComponenteReact() {
  const [mostrarNuevoComponente, setMostrarNuevoComponente] = useState(false);
  const [mostrarComponenteDos, setMostrarComponenteDos] = useState(false);
  const [mostrarComponenteTres, setMostrarComponenteTres] = useState(false);
  const [mostrarInformeProduccion, setMostrarInformeProduccion] = useState(false);

  function returnpage() {
    setMostrarNuevoComponente(false);
    setMostrarComponenteDos(false);
    setMostrarComponenteTres(false);
    setMostrarInformeProduccion(false);
  }

  function startProgram() {
    setMostrarNuevoComponente(true);
    setMostrarComponenteDos(false);
    setMostrarComponenteTres(false);
    setMostrarInformeProduccion(false);
  }

  function startSecondProgram() {
    setMostrarComponenteDos(true);
    setMostrarNuevoComponente(false);
    setMostrarComponenteTres(false);
    setMostrarInformeProduccion(false);
  }

  function startThirdProgram() {
    setMostrarComponenteTres(true);
    setMostrarNuevoComponente(false);
    setMostrarComponenteDos(false);
    setMostrarInformeProduccion(false);
  }

  function startFourthProgram() {
    setMostrarInformeProduccion(true);
    setMostrarNuevoComponente(false);
    setMostrarComponenteDos(false);
    setMostrarComponenteTres(false);
  }

  return (
    <div className="Container">
      <div className="section_left">
        <div className="logo" onClick={returnpage}>
          <h1>Trabajo En clase Js</h1>
        </div>
        <div className="opcion-1" onClick={startProgram}>
          <h3>Primer Punto (IMC)</h3>
        </div>
        <div className="opcion-2" onClick={startSecondProgram}>
          <h3>Segundo Punto (Galeria)</h3>
        </div>
        <div className="opcion-3" onClick={startThirdProgram}>
          <h3>Tercer Punto (Tabla Dinamica)</h3>
        </div>
        <div className="opcion-4" onClick={startFourthProgram}>
          <h3>Cuarto Punto (API)</h3>
        </div>
      </div>
      <div className="section_right">
        {!mostrarNuevoComponente && !mostrarComponenteDos && !mostrarComponenteTres && !mostrarInformeProduccion ? (
          <div className="text">
            <h1>Seleccione una opcion</h1>
          </div>
        ) : mostrarNuevoComponente ? (
          <IMCCalculator />
        ) : mostrarComponenteDos ? (
          <Gallery />
        ) : mostrarComponenteTres ? (
          <DynamicTable />
        ) : (
          <ApiDataList />
        )}
      </div>
    </div>
  );
}



export default ComponenteReact;
