import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './direactory/directory.reduer';
import shopReducer from './shop/shop.reducer.js';
// imoirt directoryReducer from './direactory/directory.reduer.js'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
