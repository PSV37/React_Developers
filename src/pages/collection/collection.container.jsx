import {connect} from 'react-redux'
import {compose} from 'redux'
import { createStructuredSelector, createSelectorCreator } from 'reselect'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'

const mapStateToProps = createSelectorCreator({
    isLoading : state => !selectIsCollectionsLoaded(state)
})


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer