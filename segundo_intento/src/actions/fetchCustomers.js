import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const custom = [
    {
        dni: "20000000",
        name: "Daniel",
        age: 31
    },
    {
        dni: "200000",
        name: "Juan",
        age: 32
    },
    {
        dni: "2000000",
        name: "Carlos",
        age: 33
    }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => custom);