import { HandlerWithIdArg } from '../items-list/types';
import { State, CartItem } from '../../reducers/types';

// То что вернет mapStateToProps
interface MapStateToPropsReturn {
  items: CartItem[];
  total: number;
}

type MapStateToProps = (state: State) => MapStateToPropsReturn;

interface MapDispatchToProps {
  onDecrease: HandlerWithIdArg;
  onIncrease: HandlerWithIdArg;
  onDelete: HandlerWithIdArg;
}

interface Props extends MapStateToPropsReturn, MapDispatchToProps {}

type RenderRow = (item: CartItem, idx: number) => JSX.Element;

export { Props, MapStateToProps, MapDispatchToProps, RenderRow };
