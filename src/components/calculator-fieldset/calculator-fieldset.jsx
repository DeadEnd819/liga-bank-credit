import React from 'react';
import PropTypes from 'prop-types';

const CalculatorFieldset = ({children, legend, modifier, error}) => {
  return (
    <fieldset
      className={`form-calculator__fieldset form-calculator__fieldset${modifier}${error ? ` form-calculator__fieldset--error` : ``}`}
    >
      <legend className="form-calculator__legend visually-hidden">{legend}</legend>
      {children}
    </fieldset>
  );
};

CalculatorFieldset.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired,
  ]).isRequired,
  legend: PropTypes.string.isRequired,
  modifier: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

export default CalculatorFieldset;
