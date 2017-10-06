import React, { Component } from 'react'
import Cake from '../Cake/Cake.js'
import './CakeList.css'

class CakeList extends Component {
  constructor({cakes}){
    super()
    this.state = {cakes}
  }

  componentWillReceiveProps(nextProps){
    this.setState({cakes: nextProps.cakes})
  }

  render(){
    let {onDestroy, onCakeUpdate} = this.props
    return (

      <ul className="CakeList">
        { this.state.cakes.map((cake,i) => (
          <Cake key={i} {...cake} cakeId={i} onRemove={onDestroy} onCakeUpdate={onCakeUpdate}/>
        )) }
      </ul>
    )
  }
}

export default CakeList
