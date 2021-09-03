import actionTypes from '../actions/actionTypes';

interface Action {
  type: string;
  data: any;
}
function loggedUserReducer(
  loggedUser = {isAuthenticated: true},
  action: Action,
) {
  let newloggedUser = loggedUser;
  switch (action.type) {
    case actionTypes.LOG_IN:
      newloggedUser = {
        ...action.data,
        isAuthenticated: true,
      };

      break;

    default:
      break;
  }
  return newloggedUser;
}
export default loggedUserReducer;
