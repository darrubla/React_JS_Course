import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";


const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weather-extra-info">
      <span className="extra-info-text">{`humidity: ${humidity}% - `}</span>
      <span className="extra-info-text">{`wind: ${wind}`}</span>
  </div>
);
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};


export default WeatherExtraInfo;