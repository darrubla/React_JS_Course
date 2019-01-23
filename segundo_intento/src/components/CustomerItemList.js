import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types';

const CustomerItemList = ({customer, editAction, delAction, urlPath, dni}) => {
    return (
        <div>
            <div className="customer-list-item">
                <div className="field">
                    <Link to={`${urlPath}${dni}`}>{customer}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerItemList.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};
export default CustomerItemList;