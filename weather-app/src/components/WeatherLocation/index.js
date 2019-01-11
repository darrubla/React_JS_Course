import React, {Component} from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import './styles.css';

const location = "Barranquilla,co";
const api_key = "28ab7a2b69f8abfffd19778a0fea66b6";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


const data = {
    temperature: 0,
    humidity: 0,
    wind: '',
}
// const WeatherLocation = () => (
//     <div className="weather-location-cont">
//         <Location city={"Barranquilla"}></Location>
//         <WeatherData data={data}></WeatherData>
//     </div>
// );
class WeatherLocation extends Component {
    constructor(){
        super();
        this.state ={
            city: location,
            data: data,
        };

        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve =>{
            return resolve.json();
        }).then(data =>{
            console.log(data);
            var temp = data.main.temp;
            var humd = data.main.humidity;
            var wind_speed = data.wind.speed

            console.log(temp, humd, wind_speed);

            const new_data = {
                temperature: Number(temp - 273.15).toFixed(2),
                humidity: humd,
                wind: wind_speed,
            }

            this.setState({
                data: new_data,
            });

            debugger;
        });

        console.log("Hola, si funciona el botón actualizar");
    }
    render() {

        const {city, data} = this.state;
        return (
            <div className="weather-location-cont">
                {this.handleUpdateClick()}
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
            </div>
        );
    }
}

export default WeatherLocation;