import React, { Component } from 'react';
import cakes from './cake.json';
import CakeList from './CakeList.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cakes,
      title: '',
      desc: '',
      image: ''
    };

    this.search = this.search.bind(this)
    this.destroy = this.destroy.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.addCake = this.addCake.bind(this)
  }

  destroy(event) {
    let removed = this.state.cakes.filter( (c, i) => i !== parseInt(event.target.value, 10))
    this.setState({cakes: removed})
  }
  
  search(event){
    let searchTerm = event.target.value.toLowerCase()
    let searchedCakes = cakes.filter(({title}) => title.toLowerCase().includes(searchTerm))
    this.setState({cakes:searchedCakes})
  }

  handleInput(event){
    this.setState({
      [event.target.name]: event.target.value
    }) 
  }

  addCake(event){

    let {cakes, title, desc, image} = this.state

    this.setState({cakes: [...cakes, {
      title,
      desc,
      image
    }]})

    event.preventDefault()
  }

  render() {
    let {cakes,title,desc,image}= this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cakes!!!</h1>
          <form action="">
            <input value={title} onChange={this.handleInput} name="title" type="text" placeholder="title"/>
            <input value={desc}  onChange={this.handleInput} name="desc"  type="text" placeholder="description"/>
            <input value={image} onChange={this.handleInput} name="image" type="text" placeholder="image url"/>
            <input type="submit" onClick={this.addCake}/>
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
