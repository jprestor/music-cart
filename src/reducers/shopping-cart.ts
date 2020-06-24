import { AnyAction, State, SCState, Item, CartItem } from './types';

const updateCartItem = (
  item: Item,
  cartItem: Partial<CartItem> = {},
  quantity = 1
): CartItem => {
  const {
    id = item.id,
    category = item.category,
    title = item.title,
    artist = item.artist,
    count = 0,
    total = 0,
  } = cartItem;

  return {
    id,
    category,
    title,
    artist,
    count: count + quantity,
    total: total + quantity * item.price,
  };
};

const updateCartItems = (
  cartItems: CartItem[],
  cartItem: CartItem,
  idx: number
) => {
  if (cartItem.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, cartItem];
  } else {
    return [...cartItems.slice(0, idx), cartItem, ...cartItems.slice(idx + 1)];
  }
};

const updateOrder = (
  state: State,
  itemId: string,
  quantity?: number
): SCState => {
  const {
    itemsList: { items },
    shoppingCart: { cartItems },
  } = state;

  const item = items.find((item) => item.id === itemId);
  const cartItemIndex = cartItems.findIndex(({ id }) => id === itemId);
  const cartItem = cartItems[cartItemIndex];

  const newCartItem = updateCartItem(item!, cartItem, quantity);
  const newCartitems = updateCartItems(cartItems, newCartItem, cartItemIndex);

  let totalCount = 0;
  let orderTotal = 0;
  newCartitems.forEach((i) => {
    totalCount += i.count;
    orderTotal += i.total;
  });

  return {
    cartItems: newCartitems,
    totalCount,
    orderTotal,
  };
};

const updateShoppingCart = (state: State | undefined, action: AnyAction) => {
  if (state === undefined) {
    return {
      cartItems: [],
      totalCount: 0,
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case 'ITEM_ADDED_TO_CART':
      return updateOrder(state, action.payload);

    case 'ITEM_DECREASED_IN_CART':
      return updateOrder(state, action.payload, -1);

    case 'ITEM_DELETED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );

      return updateOrder(state, action.payload, -item!.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
