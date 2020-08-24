import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Imports de Componentes
import Componente01 from './componets/Componente01'


//funcion creada para presentar los datos en html
function Usuario(nombre, apellido, edad){
  var Presentacion = <div>
    <h2>Nombre: {nombre}</h2>
    <h2>Apellido: {apellido}</h2>
    <h2>Edad: {edad}</h2>
  </div>
  return Presentacion;
}

function App() {
  var nombre = "Darwin";
  var apellido = "Ochoa"
  var edad = "25";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edicion en tiempo real de aplicacion en React.
        <h1>
          Hola Mundo!
        </h1>
          {Usuario (nombre, apellido, edad)}
          <Componente01/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
