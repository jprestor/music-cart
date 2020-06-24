import { State } from '../../../reducers/types';

interface Props {
  loginSuccess: boolean;
}

type MapStateToProps = (state: State) => Props;

export { Props, MapStateToProps };
