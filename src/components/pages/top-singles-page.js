import React, { Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { fetchData, itemAddedToCart } from '../../actions';
import { withLastfmService } from '../hoc';

import Row from '../row';
import ItemList from '../items-list';
import ItemDetails from '../item-details';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ itemsList: { items, loading, error } }) => {
  items = items.filter((i) => i.category === 'single');

  return {
    items,
    loading,
    error
  };
};

// const mapDispatchToProps = {
//   topArtistsLoaded,
//   dataRequested,
//   dataFetchError
// };

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ topArtistsLoaded }, dispatch);
// };

// const mapDispatchToProps = (dispatch, { lastfmService }) => {
//   return {
//     fetchData: fetchData(lastfmService, dispatch),
//     onAddedToCart: (id) => dispatch(itemAddedToCart(id))
//   };
// };

const mapDispatchToProps = (dispatch, { lastfmService }) => {
  return bindActionCreators(
    {
      fetchData: fetchData(lastfmService.getSingles),
      onAddedToCart: itemAddedToCart // Благодаря Thunk мы можем передать в dispatch функцию в качестве действия
    },
    dispatch
  );
};

const SinglesList = compose(
  withLastfmService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemList);

const TopSinglesPage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Fragment>
      <h1>Top Singles Catalog</h1>
      <Row
        left={<SinglesList onShowInfo={(id) => history.push(id)} />}
        right={<ItemDetails id={id} />}
      />
    </Fragment>
  );
};

export default withRouter(TopSinglesPage);