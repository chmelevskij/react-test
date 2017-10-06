import React from 'react'
import './Cake.css'

const Cake = ({title, desc, image, cakeId, onRemove, onEdit}) => (
  <li className="Cake">
    <h2 className="Cake-title"> {title} </h2>
    <p> {desc} </p>
    <img className="Cake-image" src={image} alt={title}/>
    <button className="Cake-edit" onClick={onEdit} value={cakeId}>&#128394;</button>
    <button className="Cake-remove" onClick={onRemove} value={cakeId}>X</button>
  </li>
)

export default Cake
