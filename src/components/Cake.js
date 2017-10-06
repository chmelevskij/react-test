import React, {Component} from 'react'
import CakeForm from './CakeForm.js'
import './Cake.css'

class Cake extends Component {
  constructor({image, title, desc, cakeId, onCakeUpdate}){
    super()
    this.state = {
      title,
      desc,
      cakeId,
      image,
      editable: false,
      onCakeUpdate
    }

    this.finishEdit = this.finishEdit.bind(this)
    this.edit = this.edit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  finishEdit(event){
    let {title, desc, cakeId, onCakeUpdate, editable} = this.state

    onCakeUpdate(cakeId, title, desc)
    this.setState({editable: !editable})
  }

  handleInput(event){
    this.setState({
      [event.target.name]: event.target.value
    }) 
  }

  componentWillReceiveProps(nextProps){
    let {title, desc, cakeId, image} = nextProps
    this.setState({title, desc, cakeId, image})
  }

  edit(){
    this.setState({editable: !this.state.editable})
  }

  render(){
    let {cakeId, onRemove} = this.props
    let {image, editable ,title, desc} = this.state

    return (
      <li className="Cake">
        <div style={{display: editable ? "none" : "initial"}}>
          <h2 className="Cake-title"> {title} </h2>
          <p> {desc} </p>
          <img className="Cake-image" src={image} alt={title}/>
        </div>
        <CakeForm {...this.state} visible={editable} handleInput={this.handleInput} onSubmit={this.finishEdit} />
        <button className="Cake-finish" onClick={this.finishEdit} style={{ display: editable ? "initial" : "none" }} value={cakeId}>&#128077;</button>
        <button className="Cake-edit" onClick={this.edit} style={{ display: editable ? "none" : "initial" }} value={cakeId}>&#128394;</button>
        <button className="Cake-remove" onClick={onRemove} value={cakeId}>&#128465;</button>
      </li>
    )
  }
}

export default Cake
