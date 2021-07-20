import { combineReducers, createReducer } from '@reduxjs/toolkit';
import action from './actions';

const contacts = createReducer([], {
    [action.Add]: (state, { payload }) => {
        const normalizedName = payload.name.toLocaleLowerCase();
        return state.some(
            contact => contact.name.toLocaleLowerCase() === normalizedName,
        )
            ? alert(`${payload.name} is already in contacts`)
            : [payload, ...state];
    },

    [action.Delete]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [action.Filter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
    contacts,
    filter,
});
export default contactsReducer;
