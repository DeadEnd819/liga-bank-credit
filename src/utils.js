import {
  MONTHS,
  PERCENTAGE_OF_SALARY,
  FULL_PERCENTAGE,
  InterestRates,
  CAR_PRICE_BAR,
  HOME_PERCENTAGE_BAR,
  CreditTypes,
  MATERNAL,
  InitialValues
} from './const';

const {
  HOME_MINIMUM,
  HOME_MAXIMUM,
  CAR_MINIMUM,
  CAR_MAXIMUM,
  CASCO_AND_INSURANCE,
  CASCO_OR_INSURANCE
} = InterestRates;

const {HOME} = CreditTypes;

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

export const addZero = (number, length = 4) => {
  let text = String(number);

  while (text.length < length) {
    text = `0` + text;
  }

  return text;
};

export const getOfferValues = (maternal, casco, insurance, credit, contribution, time, type) => {
  let currentCredit;
  let currentContribution;

  switch (true) {
    case (credit < InitialValues[type].CREDIT.min):
      currentCredit = InitialValues[type].CREDIT.min;
      currentContribution = getContribution(InitialValues[type].CREDIT.min, InitialValues[type].CONTRIBUTION.min);
      break;
    case (credit > InitialValues[type].CREDIT.max):
      currentCredit = InitialValues[type].CREDIT.max;
      currentContribution = getContribution(InitialValues[type].CREDIT.max, InitialValues[type].CONTRIBUTION.min);
      break;
    default:
      currentCredit = credit;
      currentContribution = contribution;
  }

  const currentRate = CreditTypes.HOME === type ?
    getHomeRate(currentContribution, currentCredit) :
    getCarRate(currentCredit, casco, insurance);

  const maternalValue = maternal ? MATERNAL : 0;
  const monthlyRate = getMonthlyRate(currentRate);
  const totalValue = currentCredit - currentContribution - maternalValue;
  const paymentValue = getAnnuityPayment(totalValue, monthlyRate, time);
  const incomeValue = getIncome(paymentValue)

  return {
    totalValue,
    rateValue: currentRate,
    paymentValue,
    incomeValue
  }
};

export const getFeedbackList = (requestNumber, type, credit, contribution, time) => {
  return [
    {
      value: `№ ${addZero(requestNumber)}`,
      name: `Номер заявки`,
    },
    {
      value: `${type === HOME ? `Ипотека` :`Автокредит`}`,
      name: `Цель кредита`,
    },
    {
      value: `${splittingDigits(credit)} рублей`,
      name: `Стоимость ${type === HOME ? `недвижимости` : `автомобиля`}`,
    },
    {
      value: `${splittingDigits(contribution)} рублей`,
      name: `Первоначальный взнос`,
    },
    {
      value: `${time} лет`,
      name: `Срок кредитования`,
    },
  ];
};

export const setCurrentValue = (value, min, max, name, callback) => {
  (value < min) ? callback({name, value: min}) :
    (value > max) ? callback({name, value: max}) :
      callback({name, value: value});
};
