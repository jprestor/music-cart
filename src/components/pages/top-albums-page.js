import React, { Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { fetchData, itemAddedToCart } from '../../actions';
import { withLastfmService } from '../hoc';

import Row from '../row';
import ItemsList from '../items-list';
import ItemDetails from '../item-details';
import { withRouter } from 'react-router-dom';

/* -- AlbumsList ---- */
const mapStateToProps = ({ itemsList: { items, loading, error } }) => {
  items = items.filter((i) => i.category === 'album');

  return {
    items,
    loading,
    error,
  };
};

/*
Как можно сконфигурировать mapDispatchToProps

const mapDispatchToProps = (dispatch, { lastfmService }) => {
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

const mapDispatchToProps = (dispatch, { lastfmService }) => {
  return bindActionCreators(
    {
      fetchData: fetchData(lastfmService.getAlbums),
      onAddedToCart: itemAddedToCart,
      /* - bindActionCreators вернет () => dispatch(action())
       * - thunk позволяет передать в dispatch функцию в качестве действия
       */
    },
    dispatch
  );
};

const AlbumsList = compose(
  withLastfmService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemsList);

/* -- TopAlbumsPage ---- */
const TopAlbumsPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Fragment>
      <h1>Top Albums Catalog</h1>
      <Row
        left={<AlbumsList onShowInfo={(id) => history.push(id)} />}
        right={<ItemDetails id={id} />}
      />
    </Fragment>
  );
};

export default withRouter(TopAlbumsPage);
