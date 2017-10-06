import React from 'react'
import CakeList from './CakeList.js'
import cakesJSON from '../../cake.json'
import renderer from 'react-test-renderer'

const cakes = [{"title":"Lemon cheesecake","desc":"A cheesecake made of lemon","image":"https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg"}]

describe('<CakeList />', () => {
  let list 
  let listInstance

  beforeEach(() => {
    list = renderer.create(<CakeList cakes={cakes} />)
    listInstance = list.root
  })

  it('Renders out', () => {
    const wrapper = list.toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('Has a title', () => {
    expect(listInstance.findByType('h2').children[1]).toBe(cakes[0].title)
  })
  it('Renders image properly', () => {
    expect(listInstance.findByType('img').props.alt).toBe(cakes[0].title)
  })

  it('Renders whole list', () => {
    let wholeList = renderer.create(<CakeList cakes={cakesJSON} />).toJSON()
    expect(wholeList).toMatchSnapshot()
  })
})
