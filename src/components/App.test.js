import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'

describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('Renders cakes', () => {
    let wrapper = renderer.create(<App />).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
