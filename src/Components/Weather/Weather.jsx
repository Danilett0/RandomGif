import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { WiCloud, WiDayCloudy, WiDaySunny, WiRain , WiDayFog} from 'react-icons/wi'
import { IconContext } from "react-icons";

const validValues  = ["cloud","cloudy","fog","sunny","rain",];

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const renderState = (state) => {
  const IconState = stateByName[state]
  
  return <IconState />
}

const Weather = ({temperature, state}) => {
  return (
    <div>
      <IconContext.Provider value={ {size:"4em" ,color:"#1EA7FD"}  }>
          { renderState(state) }
      </IconContext.Provider>
      <Typography variant="h3" display="inline">{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}

export default Weather