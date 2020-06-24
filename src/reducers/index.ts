import updateLogin from './login';
import updateItemsList from './item-list';
import updateShoppingCart from './shopping-cart';

import { AnyAction, State } from './types';

const reducer = (state: State | undefined, action: AnyAction): State => {
  return {
    login: updateLogin(state, action),
    itemsList: updateItemsList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;
