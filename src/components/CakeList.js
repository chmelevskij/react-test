import React from 'react'
import Cake from './Cake.js'
import './CakeList.css'

const CakeList = ({onDestroy, onEdit, cakes}) => (
  <ul className="CakeList">
    { cakes.map((cake,i) => (
      <Cake key={i} {...cake} cakeId={i} onRemove={onDestroy} onEdit={onEdit}/>
    )) }
  </ul>
)

export default CakeList