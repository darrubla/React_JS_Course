import React from 'react';
import WeatherLocation from './WeatherLocation';


const LocationList = () =>
  <div>
    <WeatherLocation city="Barranquilla,co" />
    <WeatherLocation city="Bogota,co" />
    <WeatherLocation city="Sincelejo,co" />
  </div>;

export default LocationList;


