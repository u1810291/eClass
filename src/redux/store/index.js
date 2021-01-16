import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

const middliwares = [thunk];

const createStoreWithMiddlewares = applyMiddleware(...middliwares)(createStore);

const configureStore = (initialState) => createStoreWithMiddlewares(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore();
