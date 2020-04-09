import React from 'react';
import { connect } from 'react-redux';

import {
  itemAddedToCart,
  itemDecreasedInCart,
  itemDeletedFromCart
} from '../../actions';

import './shopping-cart-table.css';

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  const renderRow = (item, idx) => {
    const { id, artist, title, category, count, total } = item;

    return (
      <tr id={id} key={id}>
        <td>{idx + 1}</td>
        <td>{`${title} - ${artist} {{${category}}}`}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            Delete All
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            Add
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            Remove
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onDecrease: itemDecreasedInCart,
  onIncrease: itemAddedToCart,
  onDelete: itemDeletedFromCart
};

// const mapDispatchToProps = () => {
//   return {
//     onDecrease: (id) => {
//       itemDecreasedInCart(id);
//     },
//     onIncrease: (id) => {
//       itemIncreasedInCart(id);
//     },
//     onDelete: (id) => {
//       itemDeletedFromCart(id);
//     }
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
