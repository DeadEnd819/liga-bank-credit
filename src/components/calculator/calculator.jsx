import React, {useState} from 'react';
import Wrapper from '../wrapper/wrapper';
import {ReactComponent as IconPlus} from '../../assets/img/svg/icon-plus.svg';
import {ReactComponent as IconMinus} from '../../assets/img/svg/icon-minus.svg';

const rangeOneState = {
  min: `10`,
  max: `100`,
  step: `5`,
};

const rangeTwoState = {
  min: `5`,
  max: `30`,
  step: `1`,
};

const Calculator = () => {
  const [type, setType] = useState(null);
  const [credit, setCredit] = useState(2000000);
  const [contribution, setContribution] = useState(200000);
  const [time, setTime] = useState(5);
  const [maternal, setMaternal] = useState(false);

  return (
    <section className="main__calculator calculator" style={{marginBottom: "50px"}}>
      <Wrapper name={`calculator`}>
        <h2 className="calculator__title">Кредитный калькулятор</h2>
        <form action="#" className="calculator__form form-calculator" onSubmit={(evt) => console.log(evt)}>
          {/*===========================STEP ONE===============================*/}
          <div className="form-calculator__inputs-wrapper">
            <h3 className="form-calculator__title">Шаг 1. Цель кредита</h3>
            <select
              className="form-calculator__select"
              name="type"
              id="type"
              defaultValue="null"
              onChange={(evt) => setType(evt.target.value)}
            >
              <option className="form-calculator__option" value="null" disabled style={{display: "none"}}>Выберите цель кредита</option>
              <option className="form-calculator__option" value="home">Ипотечное кредитование</option>
              <option className="form-calculator__option" value="avto">Автомобильное кредитование</option>
            </select>
          </div>
          {/*===========================STEP TWO===============================*/}
          <div className="form-calculator__wrapper">
            <h3 className="form-calculator__title">Шаг 2. Введите параметры кредита</h3>

            <fieldset className="form-calculator__fieldset form-calculator__fieldset--credit">
              <legend className="form-calculator__legend visually-hidden">Расчет стоимости</legend>
              <label className="form-calculator__label" htmlFor="credit">Стоимость недвижимости</label>
              <input
                className="form-calculator__input"
                id="credit"
                name="credit"
                type="number"
                value={credit}
                onChange={(evt) => setCredit(+evt.target.value)}
              />
              <button
                className="form-calculator__button button button--minus"
                type="button"
                aria-label="Меньше"
              >
                <IconMinus className="form-calculator__icon form-calculator__icon--minus" />
              </button>
              <button
                className="form-calculator__button button button--plus"
                type="button"
                aria-label="Больше"
              >
                <IconPlus className="form-calculator__icon form-calculator__icon--plus" />
              </button>
              <span className="form-calculator__span">От 1 200 000&nbsp;&nbsp;до 25 000 000 рублей</span>
            </fieldset>

            <fieldset className="form-calculator__fieldset form-calculator__fieldset--contribution">
              <legend className="form-calculator__legend visually-hidden">Расчет взноса</legend>
              <label className="form-calculator__label" htmlFor="contribution">Первоначальный взнос</label>
              <input
                className="form-calculator__input"
                id="contribution"
                name="contribution"
                type="number"
                min={credit / 100 * 10}
                value={contribution}
                onChange={(evt) => setContribution(+evt.target.value)}
              />
              <input
                {...rangeOneState}
                className="form-calculator__range"
                id="contribution-range"
                name="contribution"
                type="range"
                value={contribution / (credit / 100)}
                onChange={(evt) => setContribution(credit / 100 * +evt.target.value)}
              />
              <span className="form-calculator__span">{contribution / (credit / 100)}%</span>
            </fieldset>

            <fieldset className="form-calculator__fieldset form-calculator__fieldset--time">
              <legend className="form-calculator__legend visually-hidden">Расчет срока</legend>
              <label className="form-calculator__label" htmlFor="time">Срок кредитования</label>
              <input
                {...rangeTwoState}
                className="form-calculator__input"
                id="time"
                name="time"
                type="number"
                value={time}
                onChange={(evt) => setTime(+evt.target.value)}
              />
              <input
                {...rangeTwoState}
                className="form-calculator__range"
                id="time-range"
                name="time"
                type="range"
                value={time}
                onChange={(evt) => setTime(+evt.target.value)}
              />
              <div className="form-calculator__span-wrapper">
                <span className="form-calculator__span">5 лет</span>
                <span className="form-calculator__span">30 лет</span>
              </div>
              <div className="form-calculator__checkbox-wrapper">
                <input
                  className="form-calculator__input visually-hidden"
                  type="checkbox"
                  id="checkbox"
                  name="maternal"
                  onChange={(evt) => setMaternal((prevState) => !prevState)}
                />
                <label className="form-calculator__label" htmlFor="maternal" />
                <p className="form-calculator__checkbox-text">Использовать материнский капитал</p>
              </div>
            </fieldset>
          </div>

          <div className="form-calculator__offer offer">
            <h3 className="offer__title">Наше предложение</h3>
            <div className="offer__wrapper">
              <dl className="offer__list">
                <div className="offer__item-wrapper">
                  <dt className="offer__value">1 333 000 рублей</dt>
                  <dd className="offer__name">Сумма ипотеки</dd>
                </div>
                <div className="offer__item-wrapper">
                  <dt className="offer__value">9,40%</dt>
                  <dd className="offer__name">Процентная ставка</dd>
                </div>
                <div className="offer__item-wrapper">
                  <dt className="offer__value">27 868 рублей</dt>
                  <dd className="offer__name">Ежемесячный платеж</dd>
                </div>
                <div className="offer__item-wrapper">
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
        </form>
      </Wrapper>
    </section>
  );
};



export default Calculator;
