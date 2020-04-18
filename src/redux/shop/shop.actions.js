import ShopActionTypes from './shop.types'
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionStart =() =>( {
    type:ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = (collectionMap) => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionMap
})


export const fetchCollectionError = (errorMsg) => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload : errorMsg
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
        const collectionMap =  convertCollectionSnapshotToMap(snapshot)
        dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(error => dispatch(fetchCollectionError(error.message)))
    }
}