import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {ReactComponent as IconMinus} from '../../assets/img/svg/icon-minus.svg';
import {ReactComponent as IconPlus} from '../../assets/img/svg/icon-plus.svg';
import {splittingDigits, setCurrentValue} from '../../utils';
import {getCredit} from '../../store/selectors';
import {setErrorFlag} from '../../store/action';
import {IdButton, CreditTypes, ParametersNames} from '../../const';
import PropTypes from 'prop-types';

const {CREDIT} = ParametersNames;

const Credit = ({initialValues, creditData, onFieldChange, setError}) => {
  const [focus, setFocus] = useState(false);

  const {credit, type} = creditData;
  const {min, max, step} = initialValues;

  const error = !(credit >= min && credit <= max);

  useEffect(() => {
    setError(error);
  }, [error, setError]);

  const handleButtonClick = useCallback((id) => {
    if (id === IdButton.INCREMENT) {
      onFieldChange({
        name: CREDIT,
        value: (credit + step)
      });
      return;
    }

    onFieldChange({
      name: CREDIT,
      value: (credit - step)
    });
  }, [onFieldChange, credit, step]);

  const handleBlurChange = useCallback((name) => {
    setCurrentValue(credit, min, max, name, onFieldChange);

    setFocus(false);
  }, [credit, max, min, onFieldChange]);

  return (
    <CalculatorFieldset legend={`Расчет стоимости`} modifier={`--credit`} error={error}>
      <label className="form-calculator__label form-calculator__label--credit" htmlFor="credit">
        Стоимость {type === CreditTypes.HOME ? `недвижимости` : `автомобиля`}
      </label>
      <input
        className="form-calculator__input form-calculator__input"
        id="credit"
        name="credit"
        type={focus ? `number` : `text`}
        value={focus ? credit : `${splittingDigits(credit)} рублей`}
        placeholder="0"
        autoComplete="off"
        onFocus={() => setFocus(true)}
        onBlur={(evt) => handleBlurChange(evt.target.name)}
        onChange={(evt) => onFieldChange(evt.target)}
      />
      <button
        className="form-calculator__button button button--minus"
        id={IdButton.DECREMENT}
        type="button"
        aria-label="Меньше"
        disabled={(credit - step) < min}
        onClick={(evt) => handleButtonClick(evt.target.id)}
      >
        <IconMinus className="form-calculator__icon form-calculator__icon--minus" />
      </button>
      <button
        className="form-calculator__button button button--plus"
        id={IdButton.INCREMENT}
        type="button"
        aria-label="Больше"
        disabled={(credit + step) > max}
        onClick={(evt) => handleButtonClick(evt.target.id)}
      >
        <IconPlus className="form-calculator__icon form-calculator__icon--plus" />
      </button>
      <span className="form-calculator__span form-calculator__span--credit">
        От {splittingDigits(min)}&nbsp;&nbsp;до {splittingDigits(max)} рублей
      </span>
    </CalculatorFieldset>
  );
};

Credit.propTypes = {
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
  setError: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  creditData: getCredit(store)
});

const mapDispatchToProps = (dispatch) => ({
  setError(flag) {
    dispatch(setErrorFlag(flag));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Credit);
