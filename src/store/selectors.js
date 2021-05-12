export const getCredit = (state) => {
  return state.CREDIT.credit;
};

export const getModalData = (state) => {
  return state.AUTHORIZED.data;
};

export const getModalFlag = (state) => {
  return state.AUTHORIZED.isModalOpen;
};

export const getRequiredInput = (state) => {
  return state.AUTHORIZED.requiredInput;
};
