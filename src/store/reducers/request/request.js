import {extend} from '../../../utils';
import {
  ActionType,
  STORE_AUTHORIZED_DATA_NAME
} from '../../../const';

const {
  MODAL_CLOSE,
  FEEDBACK_OPEN,
  REQUEST_ADD,
  DATA_CHANGE
} = ActionType;

const initialState = {
  requestNumber: 10,
  data: {
    name: ``,
    phone: ``,
    email: ``,
  },
  isFeedbackOpen: false,
  isModalOpen: false,
  requests: {},
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case DATA_CHANGE:
      return extend(state, {
        data: action.payload
      });
    case MODAL_CLOSE:
      return extend(state, {
        isModalOpen: false
      });
    case FEEDBACK_OPEN:
      return extend(state, {
        isFeedbackOpen: true
      });
    case REQUEST_ADD:
      return extend(state, {
        requestNumber: state.requestNumber++,
        data: {
          name: ``,
          phone: ``,
          email: ``,
        },
        isFeedbackOpen: false,
        isModalOpen: true,
        requests: extend(state.requests, action.payload),
      });
    default:
      return state;
  }
};

export {request};
