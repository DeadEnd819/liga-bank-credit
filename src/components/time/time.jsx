import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {getCredit} from '../../store/selectors';
import PropTypes from 'prop-types';
import {setCurrentValue} from '../../utils';

const Time = ({initialValues, creditData, onFieldChange}) => {
  const [focus, setFocus] = useState(false);

  const {time} = creditData;
  const {min, max} = initialValues;

  const handleBlurChange = useCallback((name) => {
    setCurrentValue(time, min, max, name, onFieldChange);

    setFocus(false);
  }, [time, max, min, onFieldChange]);

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
        onChange={(evt) => onFieldChange(evt.target)}
      />
      <input
        {...initialValues}
        className="form-calculator__range  form-calculator__range--time"
        id="time-range"
        name="time"
        type="range"
        value={time}
        onChange={(evt) => onFieldChange(evt.target)}
      />
      <div className="form-calculator__span-wrapper">
        <span className="form-calculator__span form-calculator__span--time">{min} лет</span>
        <span className="form-calculator__span form-calculator__span--time">{max} лет</span>
      </div>
    </CalculatorFieldset>
  );
};

Time.propTypes = {
  initialValues: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
  creditData: PropTypes.shape({
    type: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
    contribution: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    maternal: PropTypes.bool.isRequired,
    casco: PropTypes.bool.isRequired,
    insurance: PropTypes.bool.isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  creditData: getCredit(store)
});

export default connect(mapStateToProps)(Time);
