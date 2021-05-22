import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';
import {splittingDigits, getPercent} from '../../utils';

const Contribution = ({initialValues, creditData, setCredit}) => {
  const [focus, setFocus] = useState(false);

  const {credit, contribution} = creditData;
  const {min, max} = initialValues;

  const minValue = Math.round(credit / 100 * min);
  const maxValue = Math.round(credit / 100 * max);
  const isCorrect = contribution >= minValue && contribution <= maxValue;
  const rangePercent = isCorrect ? getPercent(contribution, credit) : min;

  const handleFieldChange = useCallback(({value}) => {
    if (Number.isInteger(+value)) {
      setCredit({contribution: +value});
    }
  }, [setCredit]);

  return (
    <CalculatorFieldset legend={`Расчет взноса`} modifier={`--contribution`} error={false}>
      <label className="form-calculator__label form-calculator__label--contribution" htmlFor="contribution">Первоначальный взнос</label>
      <input
        className="form-calculator__input form-calculator__input--contribution"
        id="contribution"
        name="contribution"
        type={focus ? `number` : `text`}
        value={focus ? contribution : `${splittingDigits(contribution)} рублей`}
        placeholder="0"
        autoComplete="off"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(evt) => handleFieldChange(evt.target)}
      />
      <input
        {...initialValues}
        className="form-calculator__range  form-calculator__range--contribution"
        id="contribution-range"
        name="contribution"
        type="range"
        value={rangePercent}
        onChange={(evt) => handleFieldChange({value: (credit / 100) * evt.target.value})}
      />
      <span className="form-calculator__span form-calculator__span--credit--contribution">
        {rangePercent}%
      </span>
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

export {Contribution};

export default connect(mapStateToProps, mapDispatchToProps)(Contribution);
