const updateItemsArray = (arr, newArr) => {
  if (newArr) {
    arr.forEach((item) => {
      newArr = newArr.filter((i) => i.id !== item.id);
    });

    return [...arr, ...newArr];
  }

  return arr;
};

const updateItemsList = (state, action) => {
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

    case 'FETCH_ITEMS_SUCCESS':
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
