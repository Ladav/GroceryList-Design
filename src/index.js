import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import Grocery from './containers/Grocery/Grocery';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Grocery />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();