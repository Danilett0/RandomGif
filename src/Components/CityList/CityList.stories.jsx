import React from 'react'
import CityList from './CityList'

export default {
    title: 'CityList',
    component: CityList
}

const cities = 
[
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Lima", country: "Peru"},
    {city: "Washington", country: "Estados Unidos"},
    {city: "San Salvador", country: "Salvador"}
]
export const CityListExample = () => <CityList cities={cities} />

