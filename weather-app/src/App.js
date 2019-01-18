import React, { Component } from 'react';
// import { store } from './store';
import { createStore } from  'redux';
import { Grid, Row, Col } from "react-flexbox-grid";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';



const cities = [
  'Barranquilla,co',
  'Bogota,co',
  'Sincelejo,co',
  'Madrid,es',
  'Paris,fr',
  'Barcelona,es'
];


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const store = createStore(() => {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const setCity = value => ({ type: 'setCity', value});

class App extends Component {
  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
    this.setState({ city });
    store.dispatch( setCity(city) );
  };
  render() {
    const { city } = this.state;
    return (
      // <div className="App">
      //   <LocationList cities={cities}
      //     onSelectedLocation={this.handleSelectedLocation}>
      //   </LocationList>
      // </div>
      <MuiThemeProvider theme={theme}>
        <Grid fluid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='h6' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                {city ? <ForecastExtended city={city}></ForecastExtended>:
                <h1>Selecciona una ciudad </h1>
                }
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
