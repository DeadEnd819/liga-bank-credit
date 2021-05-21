import React, {useCallback, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Credit from '../credit/credit';
import {extend} from '../../utils';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';

const States = {
  CREDIT: {
    min: 1200000,
    max: 25000000,
    step: 100000
  },
  CONTRIBUTION: {
    min: 10,
    max: 80,
    step: 5,
  },
  TIME: {
    min: 5,
    max: 30,
    step: 1,
  },
  MATERNAL: 470000
};

const StatesAvto = {
  CREDIT: {
    min: 500000,
    max: 5000000,
    step: 50000
  },
  CONTRIBUTION: {
    min: 20,
    max: 80,
    step: 5,
  },
  TIME: {
    min: 1,
    max: 5,
    step: 1,
  }
};

const Parameters = ({type, creditData, setCredit}) => {
  const [data, setData] = useState({
    rate: 0,
    payment: 0,
    income: 0,
    credit: States.CREDIT.min,
    contribution: 200000,
    time: 5,
    maternal: 0
  });
  const [error, setError] = useState({
    credit: false,
    contribution: false,
    time: false,
  });

  const {credit, contribution, time, maternal} = data;
  const {CREDIT} = States;

  useEffect(() => {
    setCredit({
      type: type,
      rate: `9,4`,
      payment: 0,
      income: 0,
      credit,
      contribution,
      time,
      maternal: Boolean(maternal)
    });
  }, [error, CREDIT.min, CREDIT.max, type, credit, contribution, time, maternal, setCredit]);

  const resetErrors = useCallback(() => {
    setError(extend(error, {
      credit: false,
      contribution: false,
      time: false,
    }));
  }, [error]);

  const handleFieldChange = useCallback(({name, value}) => {
    if (Number.isInteger(+value)) {
      setData(extend(data, {[name]: +value}));
      resetErrors();
    }
  }, [resetErrors, data, setData]);

  return (
    <div className="form-calculator__wrapper-step">
      <h3 className="form-calculator__title form-calculator__title--parameters">Шаг 2. Введите параметры кредита</h3>
      <Credit />
      {/*===========================FIELDSET CONTRIBUTION===============================*/}
      <fieldset
        className={`form-calculator__fieldset form-calculator__fieldset--contribution${error.contribution ? ` form-calculator__fieldset--error` : ``}`}
      >
        <legend className="form-calculator__legend visually-hidden">Расчет взноса</legend>
        <label className="form-calculator__label form-calculator__label--contribution" htmlFor="contribution">Первоначальный взнос</label>
        <input
          className="form-calculator__input form-calculator__input--contribution"
          id="contribution"
          name="contribution"
          type="text"
          min={creditData.credit / 100 * 10}
          value={creditData.contribution}
          placeholder="0"
          autoComplete="off"
          onChange={(evt) => handleFieldChange(evt.target)}
        />
        <input
          {...States.CONTRIBUTION}
          className="form-calculator__range  form-calculator__range--contribution"
          id="contribution-range"
          name="contribution"
          type="range"
          value={
            (creditData.contribution && creditData.credit) ?
            creditData.contribution / (creditData.credit / 100) : `10`
          }
          onChange={(evt) => handleFieldChange({
            name: evt.target.name,
            value: (creditData.credit / 100) * evt.target.value
          })}
        />
        <span className="form-calculator__span form-calculator__span--credit--contribution">
          {
            (creditData.contribution && creditData.credit) ?
              Math.round(creditData.contribution / (creditData.credit / 100)) : `10`
          }%
        </span>
      </fieldset>
      {/*===========================FIELDSET TIME===============================*/}
      <fieldset
        className={`form-calculator__fieldset form-calculator__fieldset--time${error.time ? ` form-calculator__fieldset--error` : ``}`}
      >
        <legend className="form-calculator__legend visually-hidden">Расчет срока</legend>
        <label className="form-calculator__label form-calculator__label--time" htmlFor="time">Срок кредитования</label>
        <input
          className="form-calculator__input form-calculator__input--time"
          id="time"
          name="time"
          type="text"
          value={creditData.time}
          placeholder="1"
          autoComplete="off"
          onChange={(evt) => handleFieldChange(evt.target)}
        />
        <input
          {...States.TIME}
          className="form-calculator__range  form-calculator__range--time"
          id="time-range"
          name="time"
          type="range"
          value={creditData.time}
          onChange={(evt) => handleFieldChange(evt.target)}
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
          onChange={(evt) => handleFieldChange({
            name: evt.target.name,
            value: evt.target.checked
          })}
        />
        <label className="form-calculator__label form-calculator__label--checkbox" htmlFor="checkbox">
          Использовать материнский капитал
        </label>
      </fieldset>
    </div>
  );
};

const mapStateToProps = (store) => ({
  creditData: getCredit(store)
});

const mapDispatchToProps = (dispatch) => ({
  setCredit(data) {
    dispatch(setCredit(data));
  },
});

export {Parameters};

export default connect(mapStateToProps, mapDispatchToProps)(Parameters);
