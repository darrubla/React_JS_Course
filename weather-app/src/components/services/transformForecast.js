import moment from 'moment';
import 'moment/locale/es';


const transformForecast = data =>
  data.list
    .filter(
      item =>
        moment.unix(item.dt).hour() === 7 ||
        moment.unix(item.dt).hour() === 16
    )
    .map(item => ({
      weekDay: moment.unix(item.dt).format("ddd"),
      hour: moment.unix(item.dt).hour(),
      data: {
        temperature: Number((item.main.temp - 273.15).toFixed(1)),
        humidity: item.main.humidity,
        wind: `${item.wind.speed} m/s`
      }
    }));

export default transformForecast