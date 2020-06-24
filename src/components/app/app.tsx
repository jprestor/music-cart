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
  AccountPage,
} from '../pages';

import './app.css';

const App: React.FC = () => {
  return (
    <Fragment>
      <PageHeader />

      <main className="page-main  container">
        {/* Отрисовывает только первый элемент, который соответсвует адресу */}
        <Switch>
          <Route path="/" component={HomePage} exact />
          {/* exact - копонент отобразится только при полном совпадении c path */}
          <Route path="/top-albums/:id?" component={TopAlbumsPage} />{' '}
          {/* : - адрес с параметрами
           *  ? - с опциональными параметрами */}
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
