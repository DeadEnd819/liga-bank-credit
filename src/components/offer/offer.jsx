import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCredit, getOffer} from '../../store/selectors';
import {setOffer, setFeedbackOpen} from '../../store/action';
import {CreditTypes, MinimumCredit} from '../../const';
import {
  splittingDigits,
  getComma,
  getCarRate,
  getHomeRate,
  getOfferValues
} from '../../utils';

const getOfferList = (total, type, rate, payment, income) => {
  return [
    {
      value: `${splittingDigits(total)} рублей`,
      name: `Сумма ${type === CreditTypes.HOME ? `ипотеки` : `автокредита`}`,
    },
    {
      value: `${getComma(rate)}%`,
      name: `Процентная ставка`,
    },
    {
      value: `${splittingDigits(payment)} рублей`,
      name: `Ежемесячный платеж`,
    },
    {
      value: `${splittingDigits(income)} рублей`,
      name: `Необходимый доход`,
    },
  ];
};

const Offer = ({creditData, offerData, setOffer, feedbackOpen}) => {
  const {type, credit, contribution, time, maternal, casco, insurance} = creditData;
  const {total, rate, payment, income} = offerData;

  const getRateValue = () => {
    switch (type) {
      case CreditTypes.HOME:
        return getHomeRate(contribution, credit);
      case CreditTypes.CAR:
        return getCarRate(credit, casco, insurance);
      default:
        return null;
    }
  };

  const {
    totalValue,
    rateValue,
    paymentValue,
    incomeValue
  } = getOfferValues(maternal, credit, contribution, time, getRateValue());

  useEffect(() => {
    setOffer({
      total: totalValue,
      rate: rateValue,
      payment: paymentValue,
      income: incomeValue,
    });
  }, [incomeValue, rateValue, paymentValue, totalValue, setOffer]);

  const offerList = getOfferList(total, type, rate, payment, income);

  return (
    <div className="form-calculator__offer offer">
      {
        totalValue >= MinimumCredit[type] ?
          <>
            <h3 className="offer__title">Наше предложение</h3>
            <div className="offer__wrapper">
              <dl className="offer__list">
                {offerList.map((item, index) => (
                  <div className="offer__item" key={item + index}>
                    <dt className="offer__value">{item.value}</dt>
                    <dd className="offer__name">{item.name}</dd>
                  </div>
                ))}
              </dl>
              <button
                className="offer__button"
                type="button"
                aria-label="Открыть форму заявки"
                onClick={() => feedbackOpen()}
              >
                Оформить заявку
              </button>
            </div>
          </>
          :
          <>
            <h3 className="offer__title offer__title--failure">
              {
                `Наш банк не выдаёт
                ${type === CreditTypes.HOME ? `ипотечные` : `автокредиты`}
                кредиты меньше ${splittingDigits(MinimumCredit[type])} рублей.`
              }
            </h3>
            <p className="offer__description">Попробуйте использовать другие параметры для расчёта.</p>
          </>
      }
    </div>
  );
}

const mapStateToProps = (store) => ({
  creditData: getCredit(store),
  offerData: getOffer(store),
});

const mapDispatchToProps = (dispatch) => ({
  setOffer(data) {
    dispatch(setOffer(data));
  },
  feedbackOpen() {
    dispatch(setFeedbackOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
