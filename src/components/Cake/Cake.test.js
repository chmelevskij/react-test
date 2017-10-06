import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Cake from './Cake.js'

describe('<Cake />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Cake />, div)
  })

  it('Renders Cake', () => {
    let wrapper = renderer.create(<Cake />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
