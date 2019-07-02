import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index.js'

const store = createStore(
    reducers, //Se inicializa todos los reducers
    {} //Se inicializa el estado
)

ReactDOM.render(
    <Provider store={store}>
        {/* A través del Provider, App prodrá tener acceso al store */}
        <App />
    </Provider>, 
    document.getElementById('root')
);


