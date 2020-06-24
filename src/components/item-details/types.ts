import { Item, State } from '../../reducers/types';

interface Props {
  items: Item[];
  id: string;
}

type MapStateToProps = (state: State) => { items: Item[] };

export { Props, Item, MapStateToProps };
