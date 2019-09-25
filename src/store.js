import { createStore } from 'redux';

const InitialState = { counter: 0 };

export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case "ADD_COUNTER":
            return Object.assign({}, state, {
                counter: state.counter + 1
            })
        default:
            return state;
    }
};

export const addCounter = () => dispatch => {
    return dispatch({
        type: 'ADD_COUNTER'
    });
};

export function initializeStore() {
    return createStore(reducer);
}