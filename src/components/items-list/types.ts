import { Item, ILState } from '../../reducers/types';

type HandlerWithIdArg = (id: string) => void;

interface ILContainerProps extends ILState {
  fetchData: () => void;
  onShowInfo: HandlerWithIdArg;
  onAddedToCart: HandlerWithIdArg;
}

interface ILProps {
  items: Item[];
  onShowInfo: HandlerWithIdArg;
  onAddedToCart: HandlerWithIdArg;
}

export { HandlerWithIdArg, ILContainerProps, ILProps };
