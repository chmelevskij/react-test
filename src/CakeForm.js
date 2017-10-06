import React from 'react';
import './CakeForm.css'

const CakeForm = ({handleInput, title, desc, image, onSubmit}) => (
  <form className="CakeForm">
    <label htmlFor="title"> Title </label>
    <input id="title" value={title} onChange={handleInput} name="title" type="text" placeholder="Title" required/>
    <label htmlFor="desc"> Description </label>
    <textarea id="desc" value={desc} name="desc" onChange={handleInput} placeholder="Description" cols="30" rows="10"></textarea>
    <label htmlFor="image"> Image </label>
    <input id="image" value={image} onChange={handleInput} name="image" type="url" placeholder="Image URL"/>
    <button className="CakeForm-submit" type="submit" onClick={onSubmit}>Add</button>
  </form>
)

export default CakeForm
