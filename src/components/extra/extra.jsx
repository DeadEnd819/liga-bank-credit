import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';
import {CheckboxType, CheckboxLabels, CreditTypes} from '../../const';
import {extend} from '../../utils';

const Checkbox = ({callback, checked, name, label}) => {
  return (
    <>
      <input
        className="form-calculator__checkbox visually-hidden"
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={(evt) => callback({
          name: evt.target.name,
          value: evt.target.checked
        })}
      />
      <label
        className={`form-calculator__label form-calculator__label--checkbox  form-calculator__label--${name}`}
        htmlFor={name}
      >
        {label}
      </label>
    </>
  );
};

const Extra = ({creditData, setCredit}) => {
  const {type, maternal, casco, insurance} = creditData;

  const handleFieldChange = useCallback(({name, value}) => {
    setCredit(extend(creditData,{[name]: value}));
  }, [creditData, setCredit]);

  return (
    <CalculatorFieldset legend={`Дополнительные параметры`} modifier={`--checkbox`} error={false}>
      {
        type === CreditTypes.HOME ?
          <Checkbox
            callback={handleFieldChange}
            checked={maternal}
            name={CheckboxType.MATERNAL}
            label={CheckboxLabels.MATERNAL}
          />
          :
          <>
            <Checkbox
              callback={handleFieldChange}
              checked={casco}
              name={CheckboxType.CASCO}
              label={CheckboxLabels.CASCO}
            />
            <Checkbox
              callback={handleFieldChange}
              checked={insurance}
              name={CheckboxType.INSURANCE}
              label={CheckboxLabels.INSURANCE}
            />
          </>
      }
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

export {Extra};

export default connect(mapStateToProps, mapDispatchToProps)(Extra);
