import {extend} from '../../../utils';
import {ActionType, STORE_CREDIT_DATA_NAME, STORE_OFFER_DATA_NAME} from '../../../const';

const {ADD_CREDIT, CLEAR_CREDIT, ADD_OFFER} = ActionType;

const initialState = {
  offer: {
    total: 0,
    rate: 0,
    payment: 0,
    income: 0,
  },
  creditData: {
    type: ``,
    credit: 0,
    contribution: 0,
    time: 0,
    maternal: false,
    casco: false,
    insurance: false
  }
};

const credit = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CREDIT:
      localStorage[STORE_CREDIT_DATA_NAME] = JSON.stringify(action.payload);
      return {
        ...state,
        creditData: extend(state.creditData, action.payload)
      };
    case ADD_OFFER:
      localStorage[STORE_OFFER_DATA_NAME] = JSON.stringify(action.payload);
      return {
        ...state,
        offer: extend(state.offer, action.payload)
      };
    case CLEAR_CREDIT:
      localStorage.removeItem(STORE_CREDIT_DATA_NAME);
      return {
        ...state,
        creditData: {}
      };
    default:
      return state;
  }
};

export {credit};
