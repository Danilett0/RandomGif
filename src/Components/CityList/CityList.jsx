import React from "react";
import PropTypes from "prop-types";
import CityInfo from "./../CityInfo";
import Weather from "./../Weather";
import './CityList.css'


const renderCityAndCountry = eventonClickCity => cityAndCountry => {
  const { city, country } = cityAndCountry;

  return (
    <li className="CitiesList" key={city} onClick={eventonClickCity}>
      <CityInfo city={city} country={country} />
      <Weather  temperature={10} state={"sunny"}/>
    </li>
  )
}

const CityList = ({ cities , onClickCity}) => 
    <ul className="citys">{
      cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
    }</ul>


CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired

};

export default CityList;
