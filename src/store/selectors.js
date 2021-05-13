export const getCredit = (state) => {
  return state.CREDIT.credit;
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
