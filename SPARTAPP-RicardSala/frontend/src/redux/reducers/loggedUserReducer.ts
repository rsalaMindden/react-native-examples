import actionTypes from '../actions/actionTypes';

function loggedUserReducer(
  loggedUser: any = {isAuthenticated: false},
  action: any,
) {
  let newloggedUser = loggedUser;
  switch (action.type) {
    case actionTypes.LOG_IN:
      newloggedUser = {
        data: action.data,
        isAuthenticated: true,
      };

      break;

    default:
      break;
  }
  return newloggedUser;
}
export default loggedUserReducer;
