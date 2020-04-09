import updateLogin from './login';
import updateItemsList from './item-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    login: updateLogin(state, action),
    itemsList: updateItemsList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
