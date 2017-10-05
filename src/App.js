import React, { Component } from 'react';
import cakes from './cake.json';
import CakeList from './CakeList.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {cakes:[]};
  }

  componentDidMount(){
    this.setState({cakes});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cakes!!!</h1>
        </header>
        <ul> <CakeList {...this.state}/></ul>
      </div>
    );
  }
}

export default App;
