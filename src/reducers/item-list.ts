import { AnyAction, State, ILState, Item } from './types';

const updateItemsArray = (arr: Item[], newArr?: Item[]) => {
  if (newArr) {
    arr.forEach((item) => {
      newArr = newArr!.filter((i) => i.id !== item.id);
    });

    return [...arr, ...newArr];
  }

  return arr;
};

const updateItemsList = (
  state: State | undefined,
  action: AnyAction
): ILState => {
  if (state === undefined) {
    return {
      items: [],
      loading: true,
      error: null,
    };
  }

  const items = state.itemsList ? state.itemsList.items : [];

  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        items: updateItemsArray(items),
        loading: true,
        error: null,
      };

    case 'FETCH_DATA_SUCCESS':
      return {
        items: updateItemsArray(items, action.payload),
        loading: false,
        error: null,
      };

    case 'FETCH_DATA_FAILURE':
      return {
        items: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.itemsList;
  }
};

export default updateItemsList;
