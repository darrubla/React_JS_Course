import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import CustomerActions from '../components/CustomerActions'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

// const isRequired = value => (
//     !value && "This field is Required"
// );

// const isNumber = value => (
//     isNaN(Number(value)) && "This field requires a number"
// );

const valdniate = values => {
    const error = {};

    if (!values.name) {
        error.name = "This field is required"
    }
    if (!values.age) {
        error.age = "This field is required"
    }
    if (!values.dni) {
        error.dni = "this field is required"
    }
    return error;
};

const myField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
    </div>
);

const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack}) => {
    return (
        <div>
            <h2>Client Edit</h2>
            <form onSubmit={handleSubmit}>
                <Field
                    name="dni"
                    component={myField}
                    type="text"
                    label="Dni: ">
                </Field>
                <Field
                    name="name"
                    component={myField}
                    type="text"
                    label="Name: ">
                </Field>

                <Field
                    name="age"
                    component={myField}
                    type="number"
                    label="Age: ">
                </Field>
                <CustomerActions>
                    <button type="submit" disabled={submitting}>Save</button>
                    <button onClick={onBack}>Cancel</button>
                </CustomerActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const customerEditForm = reduxForm({
  form: "CustomerEdit",
  enableReinitialize: true,
  valdniate
})(CustomerEdit);

export default setPropsAsInitial(customerEditForm);