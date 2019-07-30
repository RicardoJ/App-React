import React from 'react';

import './App.css';

function Informationbox(){
  return(
    <div id= "box">Información </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        BIENVENIDO AQUI SERA VERA TU LISTA <Informationbox/> 
      </header>
    </div>
  );
}

export default App;
