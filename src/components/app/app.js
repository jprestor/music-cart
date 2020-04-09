import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import PageHeader from '../page-header';
import PageFooter from '../page-footer';
import {
  HomePage,
  TopSinglesPage,
  TopAlbumsPage,
  CartPage,
  LoginPage,
  AccountPage
} from '../pages';

import './app.css';

const App = () => {
  return (
    <Fragment>
      <PageHeader />

      <main className="page-main  container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/top-albums/:id?" component={TopAlbumsPage} />
          <Route path="/top-singles/:id?" component={TopSinglesPage} />
          <Route path="/cart/" component={CartPage} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/account/" component={AccountPage} />

          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </main>

      <PageFooter />
    </Fragment>
  );
};

export default App;
