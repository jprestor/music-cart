import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import LastfmService from './services/lastfm-service';
import { LastfmServiceProvider } from './components/lastfm-service-context';

import store from './store';

const lastfmService = new LastfmService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <LastfmServiceProvider value={lastfmService}>
        <Router>
          <App />
        </Router>
      </LastfmServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
