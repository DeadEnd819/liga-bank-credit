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

export const getRequiredInput = (state) => {
  return state.AUTHORIZED.requiredInput;
};
