import {
  MONTHS,
  PERCENTAGE_OF_SALARY,
  FULL_PERCENTAGE,
  InterestRates,
  CAR_PRICE_BAR,
  HOME_PERCENTAGE_BAR
} from './const';

const {
  HOME_MINIMUM,
  HOME_MAXIMUM,
  CAR_MINIMUM,
  CAR_MAXIMUM,
  CASCO_AND_INSURANCE,
  CASCO_OR_INSURANCE
} = InterestRates;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const splittingDigits = (item) => {
  return (String(item)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
};

export const getPercent = (contribution, credit) => {
  return Math.round(contribution / (credit / FULL_PERCENTAGE));
};

export const getComma = (item) => {
  return (String(item)).replace('.', ',');
}

export const getAnnuityPayment = (total, rate, time) => {
  return Math.round(total * (rate + (rate / ((1 + rate) ** (MONTHS * time) - 1))));
};

export const getIncome = (payment) => {
  return Math.round(payment / PERCENTAGE_OF_SALARY * FULL_PERCENTAGE);
};

export const getMonthlyRate = (rate) => {
  return Number(rate) / FULL_PERCENTAGE / MONTHS;
}

export const getHomeRate = (contribution, credit) => {
  return getPercent(contribution, credit) < HOME_PERCENTAGE_BAR ? HOME_MAXIMUM : HOME_MINIMUM;
};

export const getCarRate = (credit, casco, insurance) => {
  return (casco && insurance) ? CASCO_AND_INSURANCE :
    (casco || insurance) ? CASCO_OR_INSURANCE :
      (credit >= CAR_PRICE_BAR) ? CAR_MINIMUM : CAR_MAXIMUM;
};

export const getContribution = (credit, percentage) => {
  return Math.round(credit / FULL_PERCENTAGE * percentage);
};
