import React from 'react';

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

export default CalculatorFieldset;
