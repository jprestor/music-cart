import React from 'react';
import ShoppingCartTable from '../shopping-cart-table';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const state = {
  shoppingCart: {
    cartItems: [
      {
        id: 1, // mbid есть не у всех
        category: 'cat',
        artist: 'artist',
        title: 'single.name',
        playcount: 'single.playcount',
        text: 'dummyText',
        imageSmall: 'imgSmall',
        imageBig: 'imgBig',
        price: Math.floor(Math.random() * 50) + 1,
      },
    ],
    totalCount: 0,
    orderTotal: 0,
  },
};

const props = {
  items: [
    {
      id: 1, // mbid есть не у всех
      category: 'cat',
      artist: 'artist',
      title: 'single.name',
      playcount: 'single.playcount',
      text: 'dummyText',
      imageSmall: 'imgSmall',
      imageBig: 'imgBig',
      price: Math.floor(Math.random() * 50) + 1,
    },
  ],
  total: 0,
};

const {
  Component,
  mapStateToProps,
  mapDispatchToProps,
  mockDispatch,
} = ShoppingCartTable as any;

describe('Testing Component', () => {
  const element = shallow(<Component {...props} />);

  it('renders correctly', () => {
    expect(toJson(element)).toMatchSnapshot();
  });

  // console.log(element.debug());
});
