import React from 'react'
import Cake from './Cake.js'
import './CakeList.css'

const CakeList = ({onDestroy, cakes}) => (
  <ul className="CakeList">
    { cakes.map((cake,i) => (
      <Cake key={i} {...cake} cakeId={i} onClick={onDestroy}/>
    )) }
  </ul>
)

export default CakeList
