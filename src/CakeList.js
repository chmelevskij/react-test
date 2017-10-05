import React from 'react'

const CakeList = ({cakes}) => (
  cakes.map((cake,i) => (
    <li key={ i }>
      <h2> {cake.title} </h2>
      <p> {cake.desc} </p>
      <img src={cake.image} alt={cake.title}/>
    </li>
  ))
)

export default CakeList
