import React from 'react';

const CakeForm = ({handleInput, title, desc, image, onSubmit}) => (
  <form >
    <input value={title} onChange={handleInput} name="title" type="text" placeholder="title" required/>
    <input value={desc}  onChange={handleInput} name="desc"  type="text" placeholder="description"/>
    <input value={image} onChange={handleInput} name="image" type="url" placeholder="image url"/>
    <input type="submit" onClick={onSubmit}/>
  </form>
)

export default CakeForm
