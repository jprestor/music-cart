import React, { Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { fetchData, itemAddedToCart } from '../../actions';
import { withLastfmService } from '../hoc';

import Row from '../row';
import ItemsList from '../items-list';
import ItemDetails from '../item-details';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ itemsList: { items, loading, error } }) => {
  items = items.filter((i) => i.category === 'album');

  return {
    items,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { lastfmService }) => {
  return bindActionCreators(
    {
      fetchData: fetchData(lastfmService.getAlbums),
      onAddedToCart: itemAddedToCart, // Благодаря Thunk мы можем передать в dispatch функцию в качестве действия
    },
    dispatch
  );
};

const AlbumsList = compose(
  withLastfmService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemsList);

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
