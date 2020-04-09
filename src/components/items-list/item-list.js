import React, { useEffect } from 'react';
import ItemListItem from '../item-list-item';

import './item-list.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const ItemList = ({ items, onShowInfo, onAddedToCart }) => {
  // Презентационный компонент. Отвечает за отрисовку
  return (
    <ul>
      {items.map((item) => {
        const { id } = item;

        return (
          <li key={id}>
            <ItemListItem
              item={item}
              onShowInfo={() => onShowInfo(id)}
              onAddedToCart={() => onAddedToCart(id)}
            ></ItemListItem>
          </li>
        );
      })}
    </ul>
  );
};

const ItemListContainer = (props) => {
  // Компонент-контейнер. Отвечает за поведение
  const { items, loading, error, onAddedToCart, onShowInfo, fetchData } = props;

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <ItemList
      onShowInfo={onShowInfo}
      onAddedToCart={onAddedToCart}
      items={items}
    />
  );
};

export default ItemListContainer;
