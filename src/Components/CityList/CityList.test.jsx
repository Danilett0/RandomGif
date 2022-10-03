import React from 'react';
import {render, fireEvent} from '@testing-library/react'

import CityList from './CityList'


const cities = 
[
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Lima", country: "Peru"},
    {city: "Washington", country: "Estados Unidos"},
    {city: "San Salvador", country: "Salvador"}
]

test("CityList render", async () => {

    const {findAllByRole} = await render( <CityList cities={cities} />)

    const items = await findAllByRole("listitem")
    
    expect(items).toHaveLength(4)
})


test("CityList click on item", async () => {

    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("listitem");

    fireEvent.click(items[0]);

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})