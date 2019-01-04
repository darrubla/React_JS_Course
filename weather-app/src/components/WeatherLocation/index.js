import React from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';

const data = {
    temperature: 5,
    humidity: 10,
    wind: '15m/s',
}

const WeatherLocation = () => (
    <div className="weather-location-cont">
        <Location city={"Barranquilla"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;