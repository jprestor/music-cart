import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Props, Item, MapStateToProps } from './types';

import './item-details.css';

const ItemDetails: React.FC<Props> = ({ items, id }) => {
  const [item, setItem] = useState<Item>();

  useEffect(() => {
    const item = items.find((i) => i.id === id);
    setItem(item);
  }, [id, items]);

  if (!item) {
    return <div></div>;
  }

  const { category, artist, title, playcount, text, imageBig, price } = item;

  return (
    <div className="item-details">
      <img src={imageBig} alt="" />
      <p>
        <b>Artist: </b>
        {artist}
      </p>
      <p>
        <b>{category}: </b>
        {title}
      </p>
      <p>
        <b>Price: </b>${price}
      </p>
      <p>
        <b>Playcount: </b>
        {playcount}
      </p>
      <p>
        <b>Info: </b>
        {text}
      </p>
    </div>
  );
};

const mapStateToProps: MapStateToProps = ({ itemsList: { items } }) => {
  return {
    items,
  };
};

export default connect(mapStateToProps)(ItemDetails);
