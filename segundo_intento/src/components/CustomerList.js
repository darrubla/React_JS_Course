import React from 'react';
import PropTypes from 'prop-types';
import CustomerItemList from './CustomerItemList';

const CustomerList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customer-list">
                {
                    customers.map( c =>
                        <CustomerItemList
                            key={c.dni}
                            dni={c.dni}
                            customer={c.name}
                            editAction={"Editar"}
                            delAction={"Eliminar"}
                            urlPath={urlPath}>
                        </CustomerItemList>
                    )
                }
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;