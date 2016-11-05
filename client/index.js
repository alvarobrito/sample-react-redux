/* eslint react/jsx-filename-extension: "off" */
/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import Transfers from './modules/transfers';

window.store = store;
ReactDOM.render(<Provider store={store}><Transfers /></Provider>, document.getElementById('app'));
