import actionTypes from './actionTypes';

import axios from 'axios';
export function loginUserAction(user: any) {
  return async (dispatch: any) => {
    user.email = user.email.toLowerCase();
    try {
      const {data} = await axios.post('http://localhost:5013/api/login', user);
      console.log(data);
      dispatch({
        type: actionTypes.LOG_IN,
        user: data,
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.LOG_IN_ERROR,
      });
    }
  };
}
export function registerUser(user: any) {
  return async (dispatch: any) => {
    user.email = user.email.toLowerCase();
    console.log(user);
    try {
      const {data} = await axios.post(
        'http://localhost:5013/api/register',
        user,
      );
      console.log(data);
      dispatch({
        type: actionTypes.LOG_USER,
        data,
      });
    } catch (error: any) {
      if (error?.response?.status === 500) {
        dispatch({
          type: actionTypes.REGISTER_ERROR,
        });
      } else {
        dispatch({
          type: actionTypes.SERVER_ERROR,
        });
      }
    }
  };
}
