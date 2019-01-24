import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootComponent = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(rootComponent, document.getElementById('root'));

serviceWorker.unregister();
