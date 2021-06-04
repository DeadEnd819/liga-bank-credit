import {extend} from '../../../utils';
import {
  ActionType,
  STORE_REQUEST_DATA_NAME,
  STORE_REQUEST_LIST_DATA_NAME
} from '../../../const';

const {
  MODAL_CLOSE,
  FEEDBACK_OPEN,
  FEEDBACK_CLOSE,
  REQUEST_ADD,
  DATA_CHANGE,
  ERROR_CHANGE
} = ActionType;

const initialState = {
  requestNumber: 1,
  data: {
    name: ``,
    phone: ``,
    email: ``,
  },
  isFeedbackOpen: false,
  isModalOpen: false,
  isError: true,
  requests: [],
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case DATA_CHANGE:
      localStorage[STORE_REQUEST_DATA_NAME] = JSON.stringify(action.payload);
      return {
        ...state,
        data: extend(state.data, action.payload)
      };
    case MODAL_CLOSE:
      return extend(state, {
        isModalOpen: false
      });
    case FEEDBACK_OPEN:
      return extend(state, {
        isFeedbackOpen: true
      });
    case FEEDBACK_CLOSE:
      return extend(state, {
        isFeedbackOpen: false
      });
    case ERROR_CHANGE:
      return extend(state, {
        isError: action.payload
      });
    case REQUEST_ADD:
      localStorage[STORE_REQUEST_LIST_DATA_NAME] = JSON.stringify(action.payload);
      return extend(state, {
        requestNumber: ++state.requestNumber,
        data: {
          name: ``,
          phone: ``,
          email: ``,
        },
        isFeedbackOpen: false,
        isModalOpen: true,
        requests: [
          ...state.requests,
          action.payload
        ],
      });
    default:
      return state;
  }
};

export {request};
