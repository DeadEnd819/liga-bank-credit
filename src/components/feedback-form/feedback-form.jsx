import React, {useState} from 'react';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';
import {CreditTypes} from '../../const';
import {checksEmail, splittingDigits} from '../../utils';
import {getRequestNumber, getCredit} from '../../store/selectors';
import {setOffer} from '../../store/action';

const minPhoneLength = 10;

const FeedbackForm = ({requestNumber, creditData}) => {
  const [phone, setPhone] = useState(``);
  const [email, setEmail] = useState(``);

  const [phoneRequired, setPhoneRequired] = useState(true);
  const [emailRequired, setEmailRequired] = useState(true);

  const {HOME} = CreditTypes;
  const {type, credit, contribution, time} = creditData;

  const handlePhoneChange = (value) => {
    setPhone(value);
    value.length < minPhoneLength ? setPhoneRequired(true) : setPhoneRequired(false);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailRequired(checksEmail(value));
  };

  return (
    <section className="main__feedback feedback">
      <div className="feedback__wrapper container">
        <h3 className="feedback__title">Шаг 3. Оформление заявки</h3>
        <dl className="feedback__list">
          <div className="feedback__item">
            <dd className="feedback__value">{`№ 00${requestNumber}`}</dd>
            <dt className="feedback__name">Номер заявки</dt>
          </div>
          <div className="feedback__item">
            <dd className="feedback__value">{type === HOME ? `Ипотека` :`Автокредит`}</dd>
            <dt className="feedback__name">Цель кредита</dt>
          </div>
          <div className="feedback__item">
            <dd className="feedback__value">{`${splittingDigits(credit)} рублей`}</dd>
            <dt className="feedback__name">{`Стоимость ${type === HOME ? `недвижимости` : `автомобиля`}`}</dt>
          </div>
          <div className="feedback__item">
            <dd className="feedback__value">{`${splittingDigits(contribution)} рублей`}</dd>
            <dt className="feedback__name">Первоначальный взнос</dt>
          </div>
          <div className="feedback__item">
            <dd className="feedback__value">{`${time} лет`}</dd>
            <dt className="feedback__name">Срок кредитования</dt>
          </div>
        </dl>
        <form action="#" className="feedback__form">
          <fieldset className="feedback__fieldset">
            <legend className="feedback__legend feedback__legend visually-hidden">Поля оформления заявки</legend>
            <label className="feedback__label visually-hidden" htmlFor="name">Поле ввода имени</label>
            <input
              className="feedback__input feedback__input--name"
              type="text"
              placeholder="ФИО"
              id="name"
              required
            />
            <label className="feedback__label visually-hidden" htmlFor="phone">Поле ввода телефона</label>
            <NumberFormat
              className="feedback__input feedback__input--phone"
              type="tel"
              placeholder="Телефон"
              id="phone"
              format="+7 (###) ###-####"
              mask="_"
              value={phone}
              required={phoneRequired}
              onValueChange={(evt) => handlePhoneChange(evt.value)}
            />
            <label className="feedback__label visually-hidden" htmlFor="email">Поле ввода электронной почты</label>
            <input
              className="feedback__input feedback__input--mail"
              type="email"
              placeholder="E-mail"
              id="email"
              value={email}
              required={emailRequired}
              onChange={(evt) => handleEmailChange(evt.target.value)}
            />
          </fieldset>
          <button className="feedback__button" type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
};

const mapStateToProps = (store) => ({
  requestNumber: getRequestNumber(store),
  creditData: getCredit(store),
});

const mapDispatchToProps = (dispatch) => ({
  setOffer(data) {
    dispatch(setOffer(data));
  },
});

export {FeedbackForm};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
