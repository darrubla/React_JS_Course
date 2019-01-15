import React, { Component } from 'react';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';


const cities = [
  'Barranquilla,co',
  'Bogota,co',
  'Sincelejo,co',
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };
  render() {
    return <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="red" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="green" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="blue" />
            </Col>
          </Row>
        </Grid>

        {/* // <div className="App">
      //   <LocationList cities={cities}
      //     onSelectedLocation={ this.handleSelectedLocation }>
      //   </LocationList>
      // </div> */}

      </MuiThemeProvider>;
  }
}

export default App;
