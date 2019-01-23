import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList'
import CustomerActions from '../components/CustomerActions';

const customers = [
    {   "dni": "20000000",
        "name": "Daniel",
        "age": 31
    },
    {   "dni": "20000000",
        "name": "Juan",
        "age": 32
    },
    {   "dni": "20000000",
        "name": "Carlos",
        "age": 33
    }
];

class CustomersContainer extends Component {

    renderBody = customers => (
        <div>
            <CustomerList
                customers={customers}
                urlPath={'customers/'}>
            </CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>New Client</button>
            </CustomerActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame header={"List of clients"}
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;