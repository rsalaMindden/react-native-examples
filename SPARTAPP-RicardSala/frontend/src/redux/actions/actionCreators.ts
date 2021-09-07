import actionTypes from './actionTypes';
import {LOG_IN_URL} from '@env';
import {SING_UP_URL} from '@env';
import axios from 'axios';
export function loginUserAction(user: any) {
  return async (dispatch: any) => {
    user.email = user.email.toLowerCase();
    try {
      const {data} = await axios.post(LOG_IN_URL, user);
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
      const {data} = await axios.post(SING_UP_URL, user);
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
