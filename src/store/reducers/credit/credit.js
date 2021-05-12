import {extend} from '../../../utils';
import {ActionType, STORE_CREDIT_DATA_NAME} from '../../../const';

const {ADD_CREDIT} = ActionType;

const initialState = {
  credit: localStorage[STORE_CREDIT_DATA_NAME] ?
    JSON.parse(localStorage[STORE_CREDIT_DATA_NAME]) :
    {}
};

const credit = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CREDIT:
      localStorage[STORE_CREDIT_DATA_NAME] = JSON.stringify([...state.credit, action.payload]);
      return extend(state, {
        credit: [...state.credit, action.payload],
      });
    default:
      return state;
  }
};

export {credit};
