import React, { Component } from 'react';
import cakes from './cake.json';
import CakeList from './CakeList.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {cakes:[]};

    this.search = this.search.bind(this)
  }

  search(event){
    let searchTerm = event.target.value.toLowerCase()
    let searchedCakes = cakes.filter(({title}) => title.toLowerCase().includes(searchTerm))
    this.setState({cakes:searchedCakes})
  }

  componentDidMount(){
    this.setState({cakes});
  }
  render() {
    let {cakes}= this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cakes!!!</h1>
          <input type="text" onChange={this.search}/>
        </header>
        { cakes.length
          ? <CakeList cakes={this.state.cakes}/>
          : <h2>No cakes matching search</h2>
        }
      </div>
    );
  }
}

export default App;
