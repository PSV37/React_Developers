import React, { Fragment } from 'react';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import { updateCollection } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'
import { createStructuredSelector} from 'reselect'
import CollectionOverviewContainer  from '../../components/collections-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection.container'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CollectionPageWithSpinner =WithSpinner(CollectionPage);


class  ShopPage extends React.Component {
  state = {
    loading:true
  }
  unsubscripbeFromSnapshop = null;


  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // const {updateCollection} = this.props;
    // const collectionRef = firestore.collection('collections');

    // collectionRef.onSnapshot(async snapshot => {
    //  const collectionMap =  convertCollectionSnapshotToMap(snapshot)
    //  updateCollection(collectionMap)
    //  this.setState({
    //    loading:false
    //  })
    // });
    // collectionRef.get().then(snapshot => {
    //   const collectionMap =  convertCollectionSnapshotToMap(snapshot)
    //   updateCollection(collectionMap)
    //   this.setState({
    //     loading:false
    //   })
    //  })
  }
  render() {
    const {match, isCollectionFetching, isCollectionLoaded} = this.props
    const {loading} = this.state
    console.log('isCollectionLoaded')
    console.log(isCollectionLoaded)
    return (
      <Fragment>
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
         component={CollectionPageContainer}
        />
      </div>
    </Fragment>
    )
  }
};


// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateCollection: (collections) => {
//       dispatch(updateCollection(collections))
//     }
//   }
// }

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null,mapDispatchToProps)(ShopPage);
