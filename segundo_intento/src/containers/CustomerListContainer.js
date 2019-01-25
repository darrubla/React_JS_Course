import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }

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
                    body={this.renderBody(this.props.custom)}
                    //footer={"hola"}
                    >
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    custom: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    custom: [ ]
};

const mapStateToProps = state => ({
    custom: getCustomers(state)
});

// const mapDispatchToProps = {fetchCustomers};

export default withRouter(
  connect(mapStateToProps, { fetchCustomers })(CustomersContainer)
);