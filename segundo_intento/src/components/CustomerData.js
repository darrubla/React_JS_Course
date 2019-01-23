import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
    return (
        <div>
            <div className="customer-app-data">
                <h2>Client Data</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong><i>DNI</i></strong>{dni}</div>
                <div><strong><i>Edad</i></strong>{age}</div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

export default CustomerData;