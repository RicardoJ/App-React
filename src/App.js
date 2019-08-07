import React from 'react';

import './App.css';

const Informationbox = () => <div id="box">Information </div>;

function Tasklist() {
  return (
    <div>
      <ul>
        <li type="disc">React.</li>
        <li type="disc">Redux.</li>
        <li type="disc">UI Testing.</li>
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        WELCOME YOUR LIST <Informationbox /> <Tasklist />
      </header>
    </div>
  );
}

export default App;
