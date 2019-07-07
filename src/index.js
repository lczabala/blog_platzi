import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';

// createStore nos permitirá crear al store de la aplicación
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// Será aplicado al store como un middlewere
import reduxThunk from 'redux-thunk'
// Se importan los reducers de la aplicación en el archivo index.js
import reducers from './reducers/index.js'

// Se crea el strore que proveerá a toda la aplicación
const store = createStore(
    // CreateStore recibe dos parámetros, 1- todos los reducers 2- estado inical
    reducers, //Se inicializa todos los reducers
    {},      //Se inicializa el estado
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    // Con el Provider, se provee el store a App para que pueda ser accedido
    // Todo dentro de app podrá acceder al store
    <Provider store={store}>
        {/* A través del Provider, App prodrá tener acceso al store */}
        <App />
    </Provider>, 
    document.getElementById('root')
);


