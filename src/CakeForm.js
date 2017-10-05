import React from 'react';

const CakeForm = ({handleInput, title, desc, image, onSubmit}) => (
  <form >
    <input value={title} onChange={handleInput} name="title" type="text" placeholder="title" required/>
    <textarea value={desc} name="desc" onChange={handleInput} placeholder="description" cols="30" rows="10"></textarea>
    <input value={image} onChange={handleInput} name="image" type="url" placeholder="image url"/>
    <input type="submit" onClick={onSubmit}/>
  </form>
)

export default CakeForm
