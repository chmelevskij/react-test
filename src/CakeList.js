import React from 'react'
import './CakeList.css'

const CakeList = ({cakes}) => (
  <ul className="CakeList">
    {
      cakes.map((cake,i) => (
        <li key={ i }>
          <h2> {cake.title} </h2>
          <p> {cake.desc} </p>
          <img src={cake.image} alt={cake.title}/>
        </li>
      ))
    }
  </ul>
)

export default CakeList
