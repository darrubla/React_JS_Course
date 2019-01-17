import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './services/transformForecast'
import CircularProgress from "@material-ui/core/CircularProgress";
import './styles.css'

export const api_key = "28ab7a2b69f8abfffd19778a0fea66b6";
export const url_base_forecast =  "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState ({ forecastData: null })
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const URL_forecast = `${url_base_forecast}?q=${this.props.city}&appid=${api_key}`;

        fetch(URL_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast =>
            <ForecastItem
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}
                key={`${forecast.weekDay}${forecast.hour}`}>
            </ForecastItem>
        );
    }

    renderProgress = () => {
        return (
            <CircularProgress color="inherit" ></CircularProgress>
        );
    }

    render() {
        const { city } = this.props;
        const {forecastData} = this.state;
        return(
            <div className='detail'>
                <h3 className="header-forecast">
                    {city}<br/>
                    {/* los próximos 5 días */}
                </h3>
                {forecastData ?
                this.renderForecastItemDays(forecastData):
                this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;