import { AnyAction } from 'redux';

/* State elements */
interface Item {
  id: string;
  category: string;
  title: string;
  artist: string;
  price: number;
  playcount?: string;
  text?: string;
  imageSmall?: string;
  imageBig?: string;
}

interface CartItem {
  id: string;
  category: string;
  title: string;
  artist: string;
  count: number;
  total: number;
}

interface Error {
  message: string;
}

/* State */
interface LoginState {
  success: boolean;
  pending: boolean;
  error: Error | null;
}

interface ILState {
  items: Item[];
  loading: boolean;
  error: Error | null;
}

interface SCState {
  cartItems: CartItem[];
  totalCount: number;
  orderTotal: number;
}

interface State {
  login: LoginState;
  itemsList: ILState;
  shoppingCart: SCState;
}

export {
  LoginState,
  ILState,
  SCState,
  State,
  Item,
  CartItem,
  Error,
  AnyAction,
};
