import {extend} from '../../../utils';
import {
  ActionType,
  STORE_AUTHORIZED_DATA_NAME
} from '../../../const';

const {
  MODAL_OPEN,
  MODAL_CLOSE,
  AUTHORIZED_SAVE_DATA,
  AUTHORIZED_CLEAR_DATA
} = ActionType;

const initialState = {
  data: {
    login: ``,
    password: ``
  },
  isModalOpen: false
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return extend(state, {
        isModalOpen: true
      });
    case MODAL_CLOSE:
      return extend(state, {
        isModalOpen: false
      });
    case AUTHORIZED_SAVE_DATA:
      localStorage[STORE_AUTHORIZED_DATA_NAME] = JSON.stringify(action.payload);
      return extend(state, {
        data: action.payload
      });
    case AUTHORIZED_CLEAR_DATA:
      localStorage.removeItem(STORE_AUTHORIZED_DATA_NAME);
      return extend(state, {
        data: {
          login: ``,
          password: ``
        },
        requiredInput: {},
      });
    default:
      return state;
  }
};

export {authorization};
