import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;