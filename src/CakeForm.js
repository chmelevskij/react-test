import React from 'react';
import './CakeForm.css'

const CakeForm = ({handleInput, title, desc, image, onSubmit}) => (
  <form className="CakeForm">
    <label htmlFor="title"> Title </label>
    <input className="CakeForm-input" id="title" value={title} onChange={handleInput} name="title" type="text" placeholder="Title" required/>
    <label htmlFor="desc"> Description </label>
    <textarea  className="CakeForm-input" id="desc" value={desc} name="desc" onChange={handleInput} placeholder="Description" cols="30" rows="10"></textarea>
    <label htmlFor="image"> Image </label>
    <input className="CakeForm-input" id="image" value={image} onChange={handleInput} name="image" type="url" placeholder="Image URL"/>
    <button className="CakeForm-submit CakeForm-input" type="submit" onClick={onSubmit}>Add</button>
  </form>
)

export default CakeForm
