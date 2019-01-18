import React, { Children } from 'react';
import PropTypes from 'prop-types';

const CustomerActions = props => {
    return (
        <div>
            <div className="customers-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};

CustomerActions.propTypes = {
    children: PropTypes.node.isRequired,

};

export default CustomerActions;