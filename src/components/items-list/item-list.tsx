import React, { useEffect } from 'react';
import ItemListItem from '../item-list-item';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import { ILProps, ILContainerProps } from './types';

import './item-list.css';

const ItemList: React.FC<ILProps> = ({ items, onShowInfo, onAddedToCart }) => {
  // Презентационный компонент. Отвечает за отрисовку
  return (
    <ul className="item-list">
      {items.map((item) => {
        const { id } = item;

        return (
          <li className="item-list-item" key={id}>
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

const ItemListContainer: React.FC<ILContainerProps> = (props) => {
  // Компонент-контейнер. Отвечает за поведение
  const { items, loading, error, onAddedToCart, onShowInfo, fetchData } = props;

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return (
    <ItemList
      items={items}
      onShowInfo={onShowInfo}
      onAddedToCart={onAddedToCart}
    />
  );
};

export default ItemListContainer;
