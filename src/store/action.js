import {ActionType} from '../const';

const {
  ADD_CREDIT,
  ADD_OFFER,
  CLEAR_CREDIT,
  MODAL_OPEN,
  MODAL_CLOSE,
  AUTHORIZED_SAVE_DATA,
  AUTHORIZED_CLEAR_DATA,
  FEEDBACK_OPEN,
  FEEDBACK_CLOSE,
  REQUEST_ADD,
  DATA_CHANGE,
  ERROR_CHANGE
} = ActionType;

export const setCredit = (data) => ({
  type: ADD_CREDIT,
  payload: data,
});

export const setOffer = (data) => ({
  type: ADD_OFFER,
  payload: data,
});

export const removeCredit = () => ({
  type: CLEAR_CREDIT,
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

export const setRequestData = (data) => ({
  type: DATA_CHANGE,
  payload: data,
});

export const setRequestModalClose = () => ({
  type: MODAL_CLOSE,
});

export const setFeedbackOpen = () => ({
  type: FEEDBACK_OPEN,
});

export const setFeedbackClose = () => ({
  type: FEEDBACK_CLOSE,
});

export const setAddRequest = (data) => ({
  type: REQUEST_ADD,
  payload: data,
});

export const setErrorFlag = (flag) => ({
  type: ERROR_CHANGE,
  payload: flag,
});
