import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const ItemDetails = ({ items, id }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const item = items.find((i) => i.id === id);
    setItem(item);
  }, [id, items]);

  if (!item) {
    return <div></div>;
  }

  const { category, artist, title, playcount, text, imageBig, price } = item;

  return (
    <div>
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

// const AlbumsDetails = () => {
//   return (

//   );
// };

const mapStateToProps = ({ itemsList: { items } }) => {
  return {
    items,
  };
};

export default connect(mapStateToProps)(ItemDetails);
