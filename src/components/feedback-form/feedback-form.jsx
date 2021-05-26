import React from 'react';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';
import {CreditTypes} from '../../const';
import {extend, getFeedbackList} from '../../utils';
import {getRequestNumber, getCredit, getName, getPhone, getEmail, getRequestData} from '../../store/selectors';
import {setAddRequest, setRequestData} from '../../store/action';

const FeedbackForm = ({requestNumber, creditData, addRequest, setRequestData, name, phone, email, data}) => {

  const {type, credit, contribution, time, maternal, casco, insurance} = creditData;
  const {HOME} = CreditTypes;

  const feedbackList = getFeedbackList(requestNumber, type, credit, contribution, time);

  const getOptions = () => {
    if (type === HOME) {
      return {
        maternal
      }
    }

    return {
      casco,
      insurance
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    addRequest({
      id: requestNumber,
      type,
      credit,
      contribution,
      time,
      user: {
        name,
        phone,
        email,
      },
      options: getOptions()
    });
  };

  return (
    <section className="main__feedback feedback">
      <div className="feedback__wrapper container">
        <h3 className="feedback__title">Шаг 3. Оформление заявки</h3>
        <dl className="feedback__list">
          {feedbackList.map((item) => (
            <div className="feedback__item" key={item}>
              <dd className="feedback__value">{item.value}</dd>
              <dt className="feedback__name">{item.name}</dt>
            </div>
          ))}
        </dl>
        <form
          action="#"
          className="feedback__form"
          onSubmit={(evt) => handleFormSubmit(evt)}
        >
          <fieldset className="feedback__fieldset">
            <legend className="feedback__legend feedback__legend visually-hidden">Поля оформления заявки</legend>
            <label className="feedback__label visually-hidden" htmlFor="name">Поле ввода имени</label>
            <input
              className="feedback__input feedback__input--name"
              type="text"
              placeholder="ФИО"
              id="name"
              value={name}
              required
              onChange={(evt) => setRequestData(extend(data, {
                name: evt.target.value
              }))}
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
              required
              onValueChange={(evt) => setRequestData(extend(data, {
                phone: evt.value
              }))}
            />
            <label className="feedback__label visually-hidden" htmlFor="email">Поле ввода электронной почты</label>
            <input
              className="feedback__input feedback__input--mail"
              type="email"
              placeholder="E-mail"
              id="email"
              value={email}
              required
              onChange={(evt) => setRequestData(extend(data, {
                email: evt.target.value
              }))}
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
  name: getName(store),
  phone: getPhone(store),
  email: getEmail(store),
  data: getRequestData(store)
});

const mapDispatchToProps = (dispatch) => ({
  addRequest(data) {
    dispatch(setAddRequest(data));
  },
  setRequestData(data) {
    dispatch(setRequestData(data));
  },
});

export {FeedbackForm};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);