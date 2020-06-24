import React, { Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { fetchData, itemAddedToCart } from '../../../actions';
import { withLastfmService } from '../../hoc';

import Row from '../../row';
import ItemList from '../../items-list';
import ItemDetails from '../../item-details';
import { withRouter } from 'react-router-dom';

import {
  ListProps,
  PageProps,
  MapStateToProps,
  MapDispatchToProps,
} from './types';

/* -- SinglesList ---- */
const mapStateToProps: MapStateToProps = ({
  itemsList: { items, loading, error },
}) => {
  items = items.filter((i) => i.category === 'single');

  return {
    items,
    loading,
    error,
  };
};

const mapDispatchToProps: MapDispatchToProps = (
  dispatch,
  { lastfmService }
) => {
  return bindActionCreators(
    {
      fetchData: fetchData(lastfmService.getSingles),
      onAddedToCart: itemAddedToCart,
    },
    dispatch
  );
};

const SinglesList = compose<React.FC<ListProps>>(
  withLastfmService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemList);

/* -- TopSinglesPage ---- */
const TopSinglesPage: React.FC<PageProps> = ({ history, match }) => {
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
