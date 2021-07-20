import { createAction } from '@reduxjs/toolkit';
import id from 'shortid';

const Add = createAction('contacts/Add', text => ({
    payload: { id: id.generate(), ...text },
}));

const Delete = createAction('contacts/Delete');

const Filter = createAction('contacts/Filter');

const action = {
    Add,
    Delete,
    Filter,
};

export default action;
