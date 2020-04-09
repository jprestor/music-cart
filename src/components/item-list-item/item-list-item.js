import React, { Fragment } from 'react';

const ItemListItem = ({ item, onAddedToCart, onShowInfo }) => {
  const { artist, title, imageSmall } = item;

  return (
    <Fragment>
      <img className="item-image" src={imageSmall} />

      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-artist">{artist}</p>

        <div className="item-buttons">
          <button className="btn btn-info" onClick={onShowInfo}>
            Show info
          </button>
          <button className="btn btn-danger" onClick={onAddedToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemListItem;
