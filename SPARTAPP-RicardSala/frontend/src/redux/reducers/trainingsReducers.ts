import actionTypes from '../actions/actionTypes';

function trainingsReducers(trainings: any = [], action: any) {
  let newTraining = trainings;
  switch (action.type) {
    case actionTypes.LOAD_TRAININGS:
      newTraining = action.data;
      break;

    default:
      break;
  }
  return newTraining;
}
export default trainingsReducers;
