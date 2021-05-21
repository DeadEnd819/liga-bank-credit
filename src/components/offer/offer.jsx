import React from 'react';

const Offer = () => {
  return (
    <div className="form-calculator__offer offer">
      <h3 className="offer__title">Наше предложение</h3>
      <div className="offer__wrapper">
        <dl className="offer__list">
          <div className="offer__item">
            <dt className="offer__value">1 330 000 рублей</dt>
            <dd className="offer__name">Сумма ипотеки</dd>
          </div>
          <div className="offer__item">
            <dt className="offer__value">9,40%</dt>
            <dd className="offer__name">Процентная ставка</dd>
          </div>
          <div className="offer__item">
            <dt className="offer__value">27 868 рублей</dt>
            <dd className="offer__name">Ежемесячный платеж</dd>
          </div>
          <div className="offer__item">
            <dt className="offer__value">61 929 рублей</dt>
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
    </div>
  );
};

export default Offer;
