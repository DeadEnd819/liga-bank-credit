import {ActionType} from '../const';

const {
  ADD_CREDIT,
  ADD_OFFER,
  CLEAR_CREDIT,
  MODAL_OPEN,
  MODAL_CLOSE,
  AUTHORIZED_SAVE_DATA,
  AUTHORIZED_CLEAR_DATA,
  REQUIRED_INPUT_CHANGE
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

export const setRequiredInput = (flags) => ({
  type: REQUIRED_INPUT_CHANGE,
  payload: flags,
});
