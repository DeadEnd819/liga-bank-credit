import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {getCredit} from '../../store/selectors';
import {ParametersNames} from '../../const';
import {splittingDigits, getPercent, getContribution} from '../../utils';
import PropTypes from 'prop-types';

const {CONTRIBUTION} = ParametersNames;

const Contribution = ({initialValues, creditData, onFieldChange}) => {
  const [focus, setFocus] = useState(false);

  const {credit, contribution} = creditData;
  const {min, max} = initialValues;

  const minValue = getContribution(credit, min);
  const maxValue = getContribution(credit, max);
  const isCorrect = contribution && contribution >= minValue && contribution <= maxValue;
  const rangePercent = isCorrect ? getPercent(contribution, credit) : min;

  const setMinContribution = useCallback(() => {
    onFieldChange({
      name: CONTRIBUTION,
      value: getContribution(credit, min)
    });
  }, [credit, min, onFieldChange]);

  const handleBlurChange = () => {
    if (contribution < minValue) {
      setMinContribution();
    }

    setFocus(false);
  };

  useEffect(() => {
    setMinContribution();

    // eslint-disable-next-line
  }, [credit]);

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
        onBlur={handleBlurChange}
        onChange={(evt) => onFieldChange(evt.target)}
      />
      <input
        {...initialValues}
        className="form-calculator__range  form-calculator__range--contribution"
        id="contribution-range"
        name="contribution"
        type="range"
        value={rangePercent}
        onChange={(evt) => onFieldChange({
          name: evt.target.name,
          value: getContribution(credit, evt.target.value)
        })}
      />
      <span className="form-calculator__span form-calculator__span--credit--contribution">
        {rangePercent}%
      </span>
    </CalculatorFieldset>
  );
};

Contribution.propTypes = {
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

export default connect(mapStateToProps)(Contribution);
