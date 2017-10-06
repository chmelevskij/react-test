import React from 'react'
import Cake from './Cake.js'
import './CakeList.css'

const CakeList = ({onDestroy, cakes, onCakeUpdate}) => (
  <ul className="CakeList">
    { cakes.map((cake,i) => (
      <Cake key={i} {...cake} cakeId={i} onRemove={onDestroy} onCakeUpdate={onCakeUpdate}/>
    )) }
  </ul>
)

export default CakeList
