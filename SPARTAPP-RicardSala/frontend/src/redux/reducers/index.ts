import {combineReducers} from 'redux';
import loggedUserReducer from './loggedUserReducer';
import trainings from './trainingsReducers';

export default combineReducers({
  loggedUserReducer,
  trainings,
});
