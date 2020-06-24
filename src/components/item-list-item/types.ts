import { Item } from '../../reducers/types';

interface Props {
  item: Item;
  onShowInfo: () => void;
  onAddedToCart: () => void;
}

export { Props };
