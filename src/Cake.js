import React from 'react'

const Cake = ({title, desc, image, cakeId, onClick}) => (
  <li>
    <h2> {title} </h2>
    <p> {desc} </p>
    <img src={image} alt={title}/>
    <button onClick={onClick} value={cakeId}>X</button>
  </li>
)

export default Cake
