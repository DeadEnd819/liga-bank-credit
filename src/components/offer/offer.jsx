import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCredit, getOffer} from '../../store/selectors';
import {setOffer, setFeedbackOpen} from '../../store/action';
import {CreditTypes, MinimumCredit, MATERNAL} from '../../const';
import {
  splittingDigits,
  getComma,
  getAnnuityPayment,
  getIncome,
  getMonthlyRate,
  getCarRate,
  getHomeRate
} from '../../utils';

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

  const maternalValue = maternal ? MATERNAL : 0;
  const totalValue = credit - contribution - maternalValue;
  const rateValue = getRateValue();
  const monthlyRate = getMonthlyRate(rateValue);
  const paymentValue = getAnnuityPayment(totalValue, monthlyRate, time);
  const incomeValue = getIncome(paymentValue);

  useEffect(() => {
    setOffer({
      total: totalValue,
      rate: rateValue,
      payment: paymentValue,
      income: incomeValue,
    });
  }, [incomeValue, rateValue, paymentValue, totalValue, setOffer]);

  return (
    <div className="form-calculator__offer offer">
      {
        totalValue >= MinimumCredit[type] ?
          <>
            <h3 className="offer__title">Наше предложение</h3>
            <div className="offer__wrapper">
              <dl className="offer__list">
                <div className="offer__item">
                  <dt className="offer__value">{splittingDigits(total)} рублей</dt>
                  <dd className="offer__name">
                    Сумма {type === CreditTypes.HOME ? `ипотеки` : `автокредита`}
                  </dd>
                </div>
                <div className="offer__item">
                  <dt className="offer__value">{getComma(rate)}%</dt>
                  <dd className="offer__name">Процентная ставка</dd>
                </div>
                <div className="offer__item">
                  <dt className="offer__value">{splittingDigits(payment)} рублей</dt>
                  <dd className="offer__name">Ежемесячный платеж</dd>
                </div>
                <div className="offer__item">
                  <dt className="offer__value">{splittingDigits(income)} рублей</dt>
                  <dd className="offer__name">Необходимый доход</dd>
                </div>
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
};

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

export {Offer};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
