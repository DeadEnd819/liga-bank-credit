import {extend} from '../../../utils';
import {ActionType, STORE_CREDIT_DATA_NAME} from '../../../const';

const {ADD_CREDIT, CLEAR_CREDIT} = ActionType;

const initialState = {
  // credit: localStorage[STORE_CREDIT_DATA_NAME] ?
  //   JSON.parse(localStorage[STORE_CREDIT_DATA_NAME]) :
  //   {}
  creditData: {
    type: null,
    rate: 0,
    payment: 0,
    income: 0,
    credit: 0,
    contribution: 0,
    time: 1,
    maternal: false
  }
};

const credit = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CREDIT:
      localStorage[STORE_CREDIT_DATA_NAME] = JSON.stringify(action.payload);
      return {
        creditData: extend(state.creditData, action.payload)
      };
    case CLEAR_CREDIT:
      localStorage.removeItem(STORE_CREDIT_DATA_NAME);
      return {
        creditData: {}
      };
    default:
      return state;
  }
};

export {credit};
