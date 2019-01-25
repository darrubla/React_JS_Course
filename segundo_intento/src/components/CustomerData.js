import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './CustomerActions';

const CustomerData = ({name, dni, age, onBack}) => {
    return (
        <div>
            <div className="customer-app-data">
                <h2>Client Data</h2>
                <div><strong><i>DNI: </i></strong>{dni}</div>
                <div><strong><i>Nombre: </i></strong>{name}</div>
                <div><strong><i>Edad: </i></strong>{age}</div>
            </div>
            <CustomerActions>
                <button onClick={onBack}>Back</button>
            </CustomerActions>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default CustomerData;