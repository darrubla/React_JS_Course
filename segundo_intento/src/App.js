import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersListContainer from './containers/CustomerListContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  // renderHome = () => <h1>Home</h1>;

  // renderCustomerContainer = () => <h1>Customer Container</h1>;

  // renderCustomerListContainer = () => <h1>Customers List Container</h1>;

  // renderCustomerNewContainer = () => <h1>New Customer Container</h1>;

  render() {
    return <Router>
        <div>
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer} />
            <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />} />
            <Route exact path="/customers" component={CustomersListContainer} />
            <Route exact path="/" component={HomeContainer} />
          </Switch>
        </div>
      </Router>;
  }
}

export default App;
