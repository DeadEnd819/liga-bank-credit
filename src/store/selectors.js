export const getCredit = (state) => {
  return state.CREDIT.creditData;
};

export const getOffer = (state) => {
  return state.CREDIT.offer;
};

export const getAuthorizationData = (state) => {
  return state.AUTHORIZED.data;
};

export const getModalFlag = (state) => {
  return state.AUTHORIZED.isModalOpen;
};

export const getRequestNumber = (state) => {
  return state.REQUEST.requestNumber;
};

export const getRequestData = (state) => {
  return state.REQUEST.data;
};

export const getName = (state) => {
  return state.REQUEST.data.name;
};

export const getPhone = (state) => {
  return state.REQUEST.data.phone;
};

export const getEmail = (state) => {
  return state.REQUEST.data.email;
};

export const getFeedbackFlag = (state) => {
  return state.REQUEST.isFeedbackOpen;
};

export const getFeedbackModalFlag = (state) => {
  return state.REQUEST.isModalOpen;
};

export const getErrorFlag = (state) => {
  return state.REQUEST.isError;
};
