import React, { Fragment } from 'react';
import ShoppingCartTable from '../../shopping-cart-table';

const CartPage: React.FC = () => {
  return (
    <Fragment>
      <h1 className="">Cart</h1>
      <ShoppingCartTable />
    </Fragment>
  );
};

export default CartPage;
