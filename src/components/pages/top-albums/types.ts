import { Dispatch } from 'redux';

import { AsyncFunc } from '../../../actions/types';
import { State, ILState } from '../../../reducers/types';
import { HandlerWithIdArg } from '../../items-list/types';

// То что вернет mapStateToProps
interface MapStateToPropsReturn extends ILState {}

// То что вернет mapDispatchToProps
interface MapDispatchToPropsReturn {
  fetchData: () => void;
  onAddedToCart: HandlerWithIdArg;
}

type MapStateToProps = (state: State) => MapStateToPropsReturn;

type MapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: {
    lastfmService: { getAlbums: AsyncFunc };
  }
) => MapDispatchToPropsReturn;

// Props компонентов SinglesList и TopSinglesPage
interface ListProps {
  onShowInfo: HandlerWithIdArg;
}

interface PageProps {
  history: any;
  match: any;
}

export { ListProps, PageProps, MapStateToProps, MapDispatchToProps };
