import React from 'react';

import './App.css';

const Informationbox = props => <div id="box">{props.text} </div>;

function Tasklist(props) {
  return (
    <div>
      <ul>
        <li type="disc">{props.first}</li>
        <li type="disc">{props.second}</li>
        <li type="disc">{props.third}</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        WELCOME YOUR LIST <Informationbox text="Information" />
        <Tasklist first="React" second="Redux" third="UI Testing" />
      </header>
    </div>
  );
}

export default App;
