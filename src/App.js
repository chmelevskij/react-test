import React, { Component } from 'react';
import cakes from './cake.json';
import CakeList from './CakeList.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {cakes};

    this.search = this.search.bind(this)
    this.destroy = this.destroy.bind(this)
  }

  destroy(event) {
    console.log(event.target.value);
    let removed = this.state.cakes.filter( (c, i) => i !== parseInt(event.target.value, 10))
    console.log(removed);
    this.setState({cakes: removed})
  }
  
  search(event){
    let searchTerm = event.target.value.toLowerCase()
    let searchedCakes = cakes.filter(({title}) => title.toLowerCase().includes(searchTerm))
    this.setState({cakes:searchedCakes})
  }

  render() {
    let {cakes}= this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cakes!!!</h1>
          <form action="">
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="description"/>
            <input type="text" placeholder="image url"/>
            <input type="submit"/>
          </form>
          <input placeholder="search" type="text" onChange={this.search}/>
        </header>
        { cakes.length
          ? <CakeList onDestroy={this.destroy} cakes={this.state.cakes}/>
          : <h2>No cakes matching search</h2>
        }
      </div>
    );
  }
}

export default App;
