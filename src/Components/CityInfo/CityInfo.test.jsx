import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo'


test("CityInfo Render", async () => {

    const city = "Buenos Aires";
    const country = "Argentina";
   
    // renderiza el component y retorna una serie de functiones de utilidad
    const { findAllByRole } = render(<CityInfo city={city} country={country} />);

    // ejecutamos el test sobre todos los componentes con elementos tipo
    // heading (h1,h2, h3, h4, h5, h6) esto nos trae un array de componentes
    const CityAndCountryComponents = await findAllByRole("heading");

    // muestro el resultado, exito o error
    expect(CityAndCountryComponents[0]).toHaveTextContent(country);
    expect(CityAndCountryComponents[1]).toHaveTextContent(city);

})