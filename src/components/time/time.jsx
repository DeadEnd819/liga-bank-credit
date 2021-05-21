import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';
import {extend} from '../../utils';

// const initialValues = {
//   min: 5,
//   max: 30,
//   step: 1,
// };

const Time = ({initialValues, creditData, setCredit}) => {
  const [focus, setFocus] = useState(false);

  const {time} = creditData;
  const {min, max} = initialValues;

  const handleBlurChange = useCallback(() => {
    (time < min) ? setCredit(extend(creditData, {time: min})) :
      (time > max) ? setCredit(extend(creditData, {time: max})) :
        setCredit(extend(creditData, {time: time}));

    setFocus(false);
  }, [time, creditData, max, min, setCredit]);


  const handleFieldChange = useCallback(({value}) => {
    if (Number.isInteger(+value)) {
      setCredit(extend(creditData, {time: +value}));
    }
  }, [creditData, setCredit]);

  return (
    <CalculatorFieldset legend={`Расчет срока`} modifier={`--time`} error={false}>
      <label className="form-calculator__label form-calculator__label--time" htmlFor="time">Срок кредитования</label>
      <input
        className="form-calculator__input form-calculator__input--time"
        id="time"
        name={focus ? `number` : `text`}
        type="text"
        value={focus ? time : `${time} лет`}
        placeholder="1"
        autoComplete="off"
        onFocus={() => setFocus(true)}
        onBlur={handleBlurChange}
        onChange={(evt) => handleFieldChange(evt.target)}
      />
      <input
        {...initialValues}
        className="form-calculator__range  form-calculator__range--time"
        id="time-range"
        name="time"
        type="range"
        value={time}
        onChange={(evt) => handleFieldChange(evt.target)}
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

const mapDispatchToProps = (dispatch) => ({
  setCredit(data) {
    dispatch(setCredit(data));
  },
});

export {Time};

export default connect(mapStateToProps, mapDispatchToProps)(Time);