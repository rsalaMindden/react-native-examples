import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

function configureStore(initialState?: any) {
  const composeEnhancers = compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}

export default configureStore;
