import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {ReactComponent as IconMinus} from '../../assets/img/svg/icon-minus.svg';
import {ReactComponent as IconPlus} from '../../assets/img/svg/icon-plus.svg';
import {splittingDigits} from '../../utils';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';
import {IdButton, CreditTypes} from '../../const';

const Credit = ({initialValues, creditData, setCredit}) => {
  const [focus, setFocus] = useState(false);

  const {credit, type} = creditData;
  const {min, max, step} = initialValues;

  const error = !(credit >= min && credit <= max);

  const handleButtonClick = useCallback((id) => {
    if (id === IdButton.INCREMENT) {
      setCredit({credit: (credit + step)});
    }

    if (id === IdButton.DECREMENT) {
      setCredit({credit: (credit - step),});
    }
  }, [setCredit, credit, step]);

  const handleCreditChange = useCallback(({value}) => {
    if (Number.isInteger(+value)) {
      setCredit({credit: +value});
    }
  }, [setCredit]);

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
        onBlur={() => setFocus(false)}
        onChange={(evt) => handleCreditChange(evt.target)}
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

const mapStateToProps = (store) => ({
  creditData: getCredit(store)
});

const mapDispatchToProps = (dispatch) => ({
  setCredit(data) {
    dispatch(setCredit(data));
  },
});

export {Credit};

export default connect(mapStateToProps, mapDispatchToProps)(Credit);
