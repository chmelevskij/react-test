import React, { Component } from 'react';
import cakes from '../cake.json';
import CakeList from './CakeList/CakeList.js';
import CakeForm from './CakeForm/CakeForm.js'
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
    this.onCakeUpdate = this.onCakeUpdate.bind(this)
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

    this.setState({cakes: [{
      title,
      desc,
      image
    },...cakes ]})

    event.preventDefault()
  }

  onCakeUpdate(id, title, desc, image){
    let cakes = [...this.state.cakes]
    cakes[id] = {
      title,
      desc,
      image
    }

    this.setState({cakes})
  }

  render() {
    let {cakes}= this.state
    return (
      <div className="App">
        <header className="App-header">
          <CakeForm {...this.state} visible={true} handleInput={this.handleInput} onSubmit={this.addCake} />
          <label className="App-search">Search<input placeholder="Type..." type="text" onChange={this.search}/></label>
        </header>
        { cakes.length
          ? <CakeList onDestroy={this.destroy} cakes={this.state.cakes} onCakeUpdate={this.onCakeUpdate}/>
          : <h2>No cakes matching search</h2>
        }
      </div>
    );
  }
}

export default App;
