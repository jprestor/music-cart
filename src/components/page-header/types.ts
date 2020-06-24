import { State } from '../../reducers/types';

interface Props {
  count: number;
}

type MapStateToProps = (state: State) => Props;

export { Props, MapStateToProps };
