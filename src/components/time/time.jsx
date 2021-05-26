import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {getCredit} from '../../store/selectors';

const Time = ({initialValues, creditData, onFieldChang}) => {
  const [focus, setFocus] = useState(false);

  const {time} = creditData;
  const {min, max} = initialValues;

  const handleBlurChange = useCallback((name) => {
    (time < min) ? onFieldChang({name, value: min}) :
      (time > max) ? onFieldChang({name, value: max}) :
        onFieldChang({name, value: time});

    setFocus(false);
  }, [time, max, min, onFieldChang]);

  return (
    <CalculatorFieldset legend={`Расчет срока`} modifier={`--time`} error={false}>
      <label className="form-calculator__label form-calculator__label--time" htmlFor="time">Срок кредитования</label>
      <input
        className="form-calculator__input form-calculator__input--time"
        id="time"
        name="time"
        type={focus ? `number` : `text`}
        value={focus ? time : `${time} лет`}
        placeholder="1"
        autoComplete="off"
        onFocus={() => setFocus(true)}
        onBlur={(evt) => handleBlurChange(evt.target.name)}
        onChange={(evt) => onFieldChang(evt.target)}
      />
      <input
        {...initialValues}
        className="form-calculator__range  form-calculator__range--time"
        id="time-range"
        name="time"
        type="range"
        value={time}
        onChange={(evt) => onFieldChang(evt.target)}
      />
      <div className="form-calculator__span-wrapper">
        <span className="form-calculator__span form-calculator__span--time">{min} лет</span>
        <span className="form-calculator__span form-calculator__span--time">{max} лет</span>
      </div>
    </CalculatorFieldset>
  );
};

const mapStateToProps = (store) => ({
  creditData: getCredit(store)
});

export default connect(mapStateToProps)(Time);
