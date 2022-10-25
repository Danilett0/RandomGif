import React from 'react'
import {render} from '@testing-library/react'
import RandomWords from "./RandomWords"


test('renders RandomWords', async () => {

    const {findAllByRole} = render(<RandomWords></RandomWords>)
    
    const apiCatComponents = await findAllByRole("img")
  
    expect(apiCatComponents[0]).toBeInTheDocument()
  
   })
  
   test('renders RandonGifs', async () => {
   
    const {findAllByRole} = render(<RandomWords />)
    
    const apiCatComponents = await findAllByRole("heading")
  
    expect(apiCatComponents[0]).toHaveClass("mainRandomW")
  
   })