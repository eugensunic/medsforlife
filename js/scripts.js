import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import store from './store';
import { Routing } from './route.js';

import { BrowserRouter } from 'react-router-dom';
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routing />
    </HashRouter>
  </Provider>,
  app
);
