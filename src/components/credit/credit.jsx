import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {ReactComponent as IconMinus} from '../../assets/img/svg/icon-minus.svg';
import {ReactComponent as IconPlus} from '../../assets/img/svg/icon-plus.svg';
import {splittingDigits} from '../../utils';
import {getCredit} from '../../store/selectors';
import {IdButton, CreditTypes, ParametersNames} from '../../const';

const {CREDIT} = ParametersNames;

const Credit = ({initialValues, creditData, onFieldChang}) => {
  const [focus, setFocus] = useState(false);

  const {credit, type} = creditData;
  const {min, max, step} = initialValues;

  const error = !(credit >= min && credit <= max);

  const handleButtonClick = useCallback((id) => {
    if (id === IdButton.INCREMENT) {
      onFieldChang({
        name: CREDIT,
        value: (credit + step)
      });
      return;
    }

    onFieldChang({
      name: CREDIT,
      value: (credit - step)
    });
  }, [onFieldChang, credit, step]);

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
        onChange={(evt) => onFieldChang(evt.target)}
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

export default connect(mapStateToProps)(Credit);
