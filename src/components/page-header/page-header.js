import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './page-header.css';

const CartItemsCounter = ({ count }) => {
  let classNames = 'cart-items-counter';
  if (count) {
    classNames += ' active';
  }

  return <span className={classNames}>{count || ''}</span>;
};

const PageHeader = ({ count }) => {
  return (
    <header className="page-header  navbar-light  bg-light">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link className="navbar-brand  nav-link" to="/">
              MusicCart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/top-albums/">
              Top albums
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/top-singles/">
              Top singles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart/">
              Cart <CartItemsCounter count={count} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login/">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account/">
              Account
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { totalCount } }) => {
  return {
    count: totalCount
  };
};

export default connect(mapStateToProps)(PageHeader);
