import React, { Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { fetchData, itemAddedToCart } from '../../../actions';
import { withLastfmService } from '../../hoc';

import Row from '../../row';
import ItemsList from '../../items-list';
import ItemDetails from '../../item-details';
import { withRouter } from 'react-router-dom';

import {
  ListProps,
  PageProps,
  MapStateToProps,
  MapDispatchToProps,
} from './types';

const mapStateToProps: MapStateToProps = ({
  itemsList: { items, loading, error },
}) => {
  items = items.filter((i) => i.category === 'album');

  return {
    items,
    loading,
    error,
  };
};

/*
Как можно сконфигурировать mapDispatchToProps

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    creator1: dispatch(creator1()),
    creator2: (id) => dispatch(creator2(id))
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ creator1, creator2 }, dispatch);
};

const mapDispatchToProps = {
  creator1,
  creator2,
};
*/

const mapDispatchToProps: MapDispatchToProps = (
  dispatch,
  { lastfmService }
) => {
  return bindActionCreators(
    {
      fetchData: fetchData(lastfmService.getAlbums),
      onAddedToCart: itemAddedToCart,
      /* - bindActionCreators вернет { () => dispatch(action()) }
       * - thunk позволяет передать в dispatch функцию в качестве действия
       */
    },
    dispatch
  );
};

const AlbumsList = compose<React.ComponentType<ListProps>>(
  withLastfmService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemsList);

/* -- TopAlbumsPage ---- */
const TopAlbumsPage: React.FC<PageProps> = ({ history, match }) => {
  // history - программный переход на страницу
  // match - содержит параметры переданные в адресную строку
  const { id } = match.params;

  return (
    <Fragment>
      <h1>Top Albums Catalog</h1>
      <Row
        left={<AlbumsList onShowInfo={(id: string) => history.push(id)} />}
        right={<ItemDetails id={id} />}
      />
    </Fragment>
  );
};

export default withRouter(TopAlbumsPage);
