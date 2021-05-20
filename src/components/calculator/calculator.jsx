import React, {useState} from 'react';
import Wrapper from '../wrapper/wrapper';
import {ReactComponent as IconPlus} from '../../assets/img/svg/icon-plus.svg';
import {ReactComponent as IconMinus} from '../../assets/img/svg/icon-minus.svg';
import {useSelect} from 'downshift'

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

const itemsOption = [`Ипотечное кредитование`, `Автомобильное кредитование`];

const Calculator = () => {
  const [type, setType] = useState(null);
  const [credit, setCredit] = useState(2000000);
  const [contribution, setContribution] = useState(200000);
  const [time, setTime] = useState(5);
  const [maternal, setMaternal] = useState(false);

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({items: itemsOption})

  return (
    <section className="main__calculator calculator" style={{marginBottom: "50px"}}>
      <Wrapper name={`calculator`}>
        <h2 className="calculator__title">Кредитный калькулятор</h2>
        <form action="#" className="calculator__form form-calculator" onSubmit={(evt) => console.log(evt)}>
          <div className="form-calculator__wrapper">
            {/*===========================STEP ONE===============================*/}
            <div className="form-calculator__wrapper-step">
              <h3 className="form-calculator__title">Шаг 1. Цель кредита</h3>
              <div className={`form-calculator__select-wrapper${isOpen ? ` form-calculator__select-wrapper--active` : ``}`}>
                <button
                  className="form-calculator__select"
                  type="button"
                  {...getToggleButtonProps()}
                >
                  {selectedItem || `Выберите цель кредита`}
                </button>
                <ul
                  className="form-calculator__option-list"
                  {...getMenuProps()}
                >
                  {isOpen &&
                  itemsOption.map((item, index) => (
                    <li
                      className="form-calculator__option"
                      key={`${item}${index}`}
                      style={
                        highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
                      }
                      {...getItemProps({item, index})}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/*===========================STEP TWO===============================*/}
            <div className="form-calculator__wrapper-step">
              <h3 className="form-calculator__title form-calculator__title--parameters">Шаг 2. Введите параметры кредита</h3>
              {/*===========================FIELDSET CREDIT===============================*/}
              <fieldset className="form-calculator__fieldset form-calculator__fieldset--credit">
                <legend className="form-calculator__legend visually-hidden">Расчет стоимости</legend>
                <label className="form-calculator__label form-calculator__label--credit" htmlFor="credit">Стоимость недвижимости</label>
                <input
                  className="form-calculator__input form-calculator__input"
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
                <span className="form-calculator__span form-calculator__span--credit">От 1 200 000&nbsp;&nbsp;до 25 000 000 рублей</span>
              </fieldset>
              {/*===========================FIELDSET CONTRIBUTION===============================*/}
              <fieldset className="form-calculator__fieldset form-calculator__fieldset--contribution">
                <legend className="form-calculator__legend visually-hidden">Расчет взноса</legend>
                <label className="form-calculator__label form-calculator__label--contribution" htmlFor="contribution">Первоначальный взнос</label>
                <input
                  className="form-calculator__input form-calculator__input--contribution"
                  id="contribution"
                  name="contribution"
                  type="number"
                  min={credit / 100 * 10}
                  value={contribution}
                  onChange={(evt) => setContribution(+evt.target.value)}
                />
                <input
                  {...rangeOneState}
                  className="form-calculator__range  form-calculator__range--contribution"
                  id="contribution-range"
                  name="contribution"
                  type="range"
                  value={contribution / (credit / 100)}
                  onChange={(evt) => setContribution(credit / 100 * +evt.target.value)}
                />
                <span className="form-calculator__span form-calculator__span--credit--contribution">{contribution / (credit / 100)}%</span>
              </fieldset>
              {/*===========================FIELDSET TIME===============================*/}
              <fieldset className="form-calculator__fieldset form-calculator__fieldset--time">
                <legend className="form-calculator__legend visually-hidden">Расчет срока</legend>
                <label className="form-calculator__label form-calculator__label--time" htmlFor="time">Срок кредитования</label>
                <input
                  {...rangeTwoState}
                  className="form-calculator__input form-calculator__input--time"
                  id="time"
                  name="time"
                  type="number"
                  value={time}
                  onChange={(evt) => setTime(+evt.target.value)}
                />
                <input
                  {...rangeTwoState}
                  className="form-calculator__range  form-calculator__range--time"
                  id="time-range"
                  name="time"
                  type="range"
                  value={time}
                  onChange={(evt) => setTime(+evt.target.value)}
                />
                <div className="form-calculator__span-wrapper">
                  <span className="form-calculator__span form-calculator__span--time">5 лет</span>
                  <span className="form-calculator__span form-calculator__span--time">30 лет</span>
                </div>
              </fieldset>

              <fieldset className="form-calculator__fieldset form-calculator__fieldset--checkbox">
                <input
                  className="form-calculator__checkbox visually-hidden"
                  type="checkbox"
                  id="checkbox"
                  name="maternal"
                  onChange={(evt) => setMaternal((prevState) => !prevState)}
                />
                <label className="form-calculator__label form-calculator__label--checkbox" htmlFor="checkbox">
                  Использовать материнский капитал
                </label>
              </fieldset>
            </div>
          </div>
          {/*===========================BLOCK OFFER===============================*/}
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
        </form>
      </Wrapper>
    </section>
  );
};



export default Calculator;
