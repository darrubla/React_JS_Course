import React, {Component} from 'react';
import Location from './Location.js';
import WeatherData from './WeatherData';
import { api_weather } from './../constants/api_url'
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

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
            city: "Somewhere in the World...",
            data: null,
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
                temperature: Number((temp - 273.15).toFixed(2)),
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
                {/* {this.handleUpdateClick()} */}
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress color="primary"></CircularProgress>
                }
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
            </div>
        );
    }
}

export default WeatherLocation;