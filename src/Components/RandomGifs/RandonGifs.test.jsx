import React from 'react'
import {render} from '@testing-library/react'
import RandonGifs from "./RandonGifs"


test('renders RandonGifs', async () => {
    const props = 'gatos'
    const {findAllByRole} = render(<RandonGifs props={props}></RandonGifs>)
    
    const apiCatComponents = await findAllByRole("heading")
  
    expect(apiCatComponents[0]).toHaveTextContent(props)
  
   })
  
   test('renders RandonGifs img', async () => {
    const palabra = 'gatos'

    const {findAllByRole} = render(<RandonGifs props={palabra}></RandonGifs>)

    expect(findAllByRole('img'))
  
   })
  
   test('renders RandonGifs', async () => {
    const palabra = 'gatos'
    
    const {findAllByRole} = render(<RandonGifs props={palabra}></RandonGifs>)
  
    expect(findAllByRole('h1'))
  
   })