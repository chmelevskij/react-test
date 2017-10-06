import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import CakeForm from './CakeForm.js'

describe('<CakeForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CakeForm />, div)
  })

  it('Renders cakes', () => {
    let wrapper = renderer.create(<CakeForm />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
