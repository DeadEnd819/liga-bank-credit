import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {ReactComponent as IconMinus} from '../../assets/img/svg/icon-minus.svg';
import {ReactComponent as IconPlus} from '../../assets/img/svg/icon-plus.svg';
import {extend} from '../../utils';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';

const initialValues = {
  min: 1200000,
  max: 25000000,
  step: 100000
};

const IdButton = {
  INCREMENT: `increment`,
  DECREMENT: `decrement`
};

const Credit = ({creditData, setCredit}) => {
  const {credit} = creditData;
  const {min, max, step} = initialValues;

  const error = !(credit >= min && credit <= max);
  const incrementCredit = (credit + step) > max ? credit : (credit + step);
  const decrementCredit = (credit - step) < min ? credit : (credit - step);
  const incrementContribution = (credit + step) > max ? Math.round(max / 100 * 10) : Math.round((credit + step) / 100 * 10);
  const decrementContribution = (credit - step) < min ? Math.round(min / 100 * 10) : Math.round((credit - step) / 100 * 10);

  const handleButtonClick = useCallback((id) => {
    if (id === IdButton.INCREMENT) {
      setCredit(extend(creditData, {
        credit: incrementCredit,
        contribution: incrementContribution
      }));
    }

    if (id === IdButton.DECREMENT) {
      setCredit(extend(creditData, {
        credit: decrementCredit,
        contribution: decrementContribution
      }));
    }
  }, [creditData, setCredit, incrementContribution, decrementContribution, incrementCredit, decrementCredit]);

  const handleCreditChange = useCallback(({value}) => {
    if (Number.isInteger(+value)) {
      setCredit(extend(creditData, {
        credit: +value,
        contribution: Math.round(+value / 100 * 10)
      }));
    }
  }, [creditData, setCredit]);

  return (
    <CalculatorFieldset legend={`Расчет стоимости`} error={error} >
      <label className="form-calculator__label form-calculator__label--credit" htmlFor="credit">Стоимость недвижимости</label>
      <input
        className="form-calculator__input form-calculator__input"
        id="credit"
        name="credit"
        type="text"
        value={credit}
        placeholder="0"
        autoComplete="off"
        onChange={(evt) => handleCreditChange(evt.target)}
      />
      <button
        className="form-calculator__button button button--minus"
        id={IdButton.DECREMENT}
        type="button"
        aria-label="Меньше"
        onClick={(evt) => handleButtonClick(evt.target.id)}
      >
        <IconMinus className="form-calculator__icon form-calculator__icon--minus" />
      </button>
      <button
        className="form-calculator__button button button--plus"
        id={IdButton.INCREMENT}
        type="button"
        aria-label="Больше"
        onClick={(evt) => handleButtonClick(evt.target.id)}
      >
        <IconPlus className="form-calculator__icon form-calculator__icon--plus" />
      </button>
      <span className="form-calculator__span form-calculator__span--credit">От {min}&nbsp;&nbsp;до {max} рублей</span>
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
