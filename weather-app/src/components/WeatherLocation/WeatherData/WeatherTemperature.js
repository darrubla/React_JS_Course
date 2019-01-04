import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";


const WeatherTemperature = ({ temperature }) =>(
    <div className="weather-temperature">
        <span className="temperature-value">{`${temperature}`}</span>
        <span className="temperature">{' C°'}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
};

export default WeatherTemperature;