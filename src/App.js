import React from 'react';
import logo from './assets/images/logo.svg';
import lts_logo from './assets/images/lts_logo.png'
import en_construccion from './assets/images/en_construccion_2.png'
import './assets/css/App.css';
import ReactPlayer from 'react-player'

//Imports de Componentes
import Componente01 from './componets/Componente01'
import ThemeSwitcher from './componets/ThemeSwitcher'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <body>
          <div className="App-body">
            <img src={lts_logo} className="App-logo" alt="logo" />
            <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
            <img src={en_construccion} className="App-logo" alt="En Contruccion"/>
            </div>
        </body>
    </div>
  );
}

export default App;
