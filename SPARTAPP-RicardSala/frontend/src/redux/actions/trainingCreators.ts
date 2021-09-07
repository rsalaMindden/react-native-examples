import actionTypes from './actionTypes';
import {LOAD_TRAININGS} from '@env';
import axios from 'axios';

export function loadTrainings() {
  return async (dispatch: any) => {
    try {
      const {data} = await axios.get(LOAD_TRAININGS);

      dispatch({
        type: actionTypes.LOAD_TRAININGS,
        data,
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.LOAD_TRAININGS_ERROR,
      });
    }
  };
}
