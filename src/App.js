import React from 'react';

import './App.css';

const Informationbox = props => <div id="box">{props.text} </div>;

class Tasklist extends React.Component {
  state = {
    show: true
  };
  showlist = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div>
          <ul>
            <li type="disc">{this.props.first} </li>
            <li type="disc">{this.props.second}</li>
            <li type="disc">{this.props.third}</li>
            <button onClick={this.showlist}>Show</button>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <div>There are not elements</div>
          <button onClick={this.showlist}>Back</button>
        </div>
      );
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        WELCOME TO YOUR LIST <Informationbox text="Information" />
        <Tasklist first="React" second="Redux" third="UI Testing" />
      </header>
    </div>
  );
}

export default App;
