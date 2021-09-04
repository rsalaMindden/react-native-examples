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
