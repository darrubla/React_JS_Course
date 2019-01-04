import React from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    <div className="weather-location-cont">
        <Location city={"Barranquilla"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;