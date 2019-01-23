import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList'
import CustomerActions from '../components/CustomerActions';

const custom = [
    {   dni: "20000000",
        name: "Daniel",
        age: 31
    },
    {   dni: "200000",
        name: "Juan",
        age: 32
    },
    {   dni: "2000000",
        name: "Carlos",
        age: 33
    }
];

class CustomersContainer extends Component {

    handleAddNew = () => {
        this.props.history.push("customers/new");
    }

    renderBody = (arrayItem) => (
        <div>
            <CustomerList
                customers={arrayItem}
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
                    body={this.renderBody(custom)}
                    //footer={"hola"}
                    >
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    // header: PropTypes.string,
    // body: PropTypes.element,
};

export default withRouter(CustomersContainer);