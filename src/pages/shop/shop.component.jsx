import React, { Fragment } from 'react';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import { updateCollection } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CollectionPageWithSpinner =WithSpinner(CollectionPage);


class  ShopPage extends React.Component {
  state = {
    loading:true
  }
  unsubscripbeFromSnapshop = null;


  componentDidMount() {
    const {updateCollection} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscripbeFromSnapshop = collectionRef.onSnapshot(async snapshot => {
     const collectionMap =  convertCollectionSnapshotToMap(snapshot)
     updateCollection(collectionMap)
     this.setState({
       loading:false
     })
    });
  }
  render() {
    const {match} = this.props
    const {loading} = this.state
    return (
      <Fragment>
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={
          (props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        } />
        <Route
          path={`${match.path}/:collectionId`}
          render={
            (props) => <CollectionPageWithSpinner isLoading={loading} {...props} />
          }
        />
      </div>
    </Fragment>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollection: (collections) => {
      dispatch(updateCollection(collections))
    }
  }
}

export default connect(null,mapDispatchToProps)(ShopPage);
