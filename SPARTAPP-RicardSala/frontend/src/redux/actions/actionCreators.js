import actionTypes from './actionTypes';
import {env} from '../../../.env';
import axios from 'axios';

export function login(email, password) {
  return async dispatch => {
    try {
      const {data} = await axios.post(env.LOG_IN_URL, {email, password});
      dispatch({
        type: actionTypes.LOG_IN,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_ERROR,
      });
    }
  };
}
