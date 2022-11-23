import React from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';

import App from './components/app/App';
import reducers from './reducers';


const root = createRoot(document.querySelector('#root'));

const store = createStore(reducers);

root.render(
    <Provider store = {store} >
        <App />
    </Provider>
);