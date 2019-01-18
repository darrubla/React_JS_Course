import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/';
import './../WeatherLocation/styles.css'


const ForecastItem = ({ weekDay, hour, data }) => (
   <div className='weather-location-cont'>
        <div className='hour-info-text'>{weekDay} - {hour}:00 hs </div>
        <WeatherData data={data}></WeatherData>
   </div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
}


export default ForecastItem;