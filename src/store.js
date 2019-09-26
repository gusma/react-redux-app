import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const InitialState = { counter: 0, name: 'Gustavo' };

export const reducer = (state = InitialState, action) => {
	switch (action.type) {
		case 'ADD_COUNTER':
			return Object.assign({}, state, {
				counter: state.counter + 1
			});
		case 'SUBTRACT_COUNTER':
			return Object.assign({}, state, {
				counter: state.counter - 1
			});
		case 'CLEAR_COUNTER':
			return Object.assign({}, state, {
				counter: 0
			});
		default:
			return state;
	}
};

export const addCounter = () => dispatch => {
	return dispatch({
		type: 'ADD_COUNTER'
	});
};

export const subtractCounter = () => dispatch => {
	return dispatch({
		type: 'SUBTRACT_COUNTER'
	});
};

export const clearCounter = () => dispatch => {
	return dispatch({
		type: 'CLEAR_COUNTER'
	});
};

export function initializeStore() {
	return createStore(reducer, InitialState, applyMiddleware(thunkMiddleware));
}
