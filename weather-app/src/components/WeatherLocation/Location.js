import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";


const Location = (props) =>{
 //const Location = ({ city }) => {}
    //Destructuring
    const { city } = props;
    //const city = props.city;

    console.log(props);

    return (
        <div className="location-cont">
            <h3>
                {city}
            </h3>
        </div>
    );

};
Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;