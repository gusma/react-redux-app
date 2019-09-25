import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { initializeStore } from './store';
import { Provider } from 'react-redux';
import App from './App';

let store = initializeStore()

render(
    < Provider store={store}>
        <App />
    </Provider >,
    document.getElementById("root")
)
