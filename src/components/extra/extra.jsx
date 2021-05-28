import React from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {getCredit} from '../../store/selectors';
import {CheckboxType, CheckboxLabels, CreditTypes} from '../../const';
import PropTypes from 'prop-types';

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

const Extra = ({creditData, onFieldChange}) => {
  const {type, maternal, casco, insurance} = creditData;

  return (
    <CalculatorFieldset legend={`Дополнительные параметры`} modifier={`--checkbox`} error={false}>
      {
        type === CreditTypes.HOME ?
          <Checkbox
            callback={onFieldChange}
            checked={maternal}
            name={CheckboxType.MATERNAL}
            label={CheckboxLabels.MATERNAL}
          />
          :
          <>
            <Checkbox
              callback={onFieldChange}
              checked={casco}
              name={CheckboxType.CASCO}
              label={CheckboxLabels.CASCO}
            />
            <Checkbox
              callback={onFieldChange}
              checked={insurance}
              name={CheckboxType.INSURANCE}
              label={CheckboxLabels.INSURANCE}
            />
          </>
      }
    </CalculatorFieldset>
  );
};

Extra.propTypes = {
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

export default connect(mapStateToProps)(Extra);
