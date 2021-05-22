import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCredit, getOffer} from '../../store/selectors';
import {setCredit, setOffer} from '../../store/action';
import {CreditTypes, MinimumCredit, MATERNAL} from '../../const';
import {splittingDigits, getPercent} from '../../utils';

const Offer = ({creditData, offerData, setCredit, setOffer}) => {
  const {type, credit, contribution, time, maternal, casco, insurance} = creditData;
  const {total, rate, payment, income} = offerData;

  const maternalValue = maternal ? MATERNAL : 0;
  const totalValue = credit - contribution - maternalValue
  const rateValue = getPercent(contribution, credit) < 15 ? 9.40 : 8.50;
  const monthlyRate = rateValue / 100 / 12;
  const paymentValue = Math.round(totalValue * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** (12 * time) - 1))));
  const incomeValue = Math.round(paymentValue / 45 * 100);

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
                  <dt className="offer__value">{rate}%</dt>
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
                type="submit"
                aria-label="Открыть форму заявки"
              >
                Оформить заявку
              </button>
            </div>
          </>
          :
          <p>Сумма мала</p>
      }
    </div>
  );
};

const mapStateToProps = (store) => ({
  creditData: getCredit(store),
  offerData: getOffer(store),
});

const mapDispatchToProps = (dispatch) => ({
  setCredit(data) {
    dispatch(setCredit(data));
  },
  setOffer(data) {
    dispatch(setOffer(data));
  },
});

export {Offer};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
