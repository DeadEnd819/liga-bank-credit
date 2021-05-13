import {ActionType} from '../const';

const {
  ADD_CREDIT,
  MODAL_OPEN,
  MODAL_CLOSE,
  AUTHORIZED_SAVE_DATA,
  AUTHORIZED_CLEAR_DATA,
  REQUIRED_INPUT_CHANGE
} = ActionType;

export const setCredit = (review) => ({
  type: ADD_CREDIT,
  payload: review,
});

export const setModalOpen = () => ({
  type: MODAL_OPEN,
});

export const setPopupClose = () => ({
  type: MODAL_CLOSE,
});

export const setAuthorizationData = (data) => ({
  type: AUTHORIZED_SAVE_DATA,
  payload: data,
});

export const clearAuthorizationData = () => ({
  type: AUTHORIZED_CLEAR_DATA,
});

export const setRequiredInput = (flags) => ({
  type: REQUIRED_INPUT_CHANGE,
  payload: flags,
});
