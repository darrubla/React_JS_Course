import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CustomerActions from './../components/CustomerActions'

class HomeContainer extends Component {
    handleOnClick = () => {
        console.log("button clicked")
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div>
                {/* <h1>Home</h1>
                <Link to="/customers">Listado de clientes</Link> */}
                <AppFrame
                    header='home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>List of clients</button>
                                {/* <Link to="/customers">Listado de Clientes</Link> */}
                            </CustomerActions>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);