import React from 'react';

const FeedbackForm = () => {
  return (
    <section className="main__feedback feedback">
      <div className="feedback__wrapper container">
        <h3 className="feedback__title">Шаг 3. Оформление заявки</h3>
        <dl className="feedback__list">
          <div className="feedback__item">
            <dd className="feedback__value">№ 0010</dd>
            <dt className="feedback__name">Номер заявки</dt>
          </div>
          <div className="feedback__item">
            <dd className="feedback__value">Ипотека</dd>
            <dt className="feedback__name">Цель кредита</dt>
          </div>
          <div className="feedback__item">
            <dd className="feedback__value">2 000 000 рублей</dd>
            <dt className="feedback__name">Стоимость недвижимости</dt>
          </div>
          <div className="feedback__item">
            <dd className="feedback__value">200 000 рублей</dd>
            <dt className="feedback__name">Первоначальный взнос</dt>
          </div>
          <div className="feedback__item">
            <dd className="feedback__value">5 лет</dd>
            <dt className="feedback__name">Срок кредитования</dt>
          </div>
        </dl>
        <form action="#" className="feedback__form">
          <fieldset className="feedback__fieldset">
            <legend className="feedback__legend feedback__legend visually-hidden">Поля оформления заявки</legend>
            <label className="feedback__label visually-hidden" htmlFor="name">Поле ввода имени</label>
            <input className="feedback__input feedback__input--name" type="text" placeholder="ФИО" id="name" />
            <label className="feedback__label visually-hidden" htmlFor="phone">Поле ввода телефона</label>
            <input className="feedback__input feedback__input--phone" type="text" placeholder="Телефон" id="phone" />
            <label className="feedback__label visually-hidden" htmlFor="mail">Поле ввода электронной почты</label>
            <input className="feedback__input feedback__input--mail" type="text" placeholder="E-mail" id="mail" />
          </fieldset>
          <button className="feedback__button" type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
