import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import CalculatorFieldset from '../calculator-fieldset/calculator-fieldset';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';
import {extend} from '../../utils';

const Extra = ({creditData, setCredit}) => {
  const {maternal} = creditData;

  const handleFieldChange = useCallback(() => {
    setCredit(extend(creditData, {maternal: !maternal}));
  }, [creditData, setCredit, maternal]);

  return (
    <CalculatorFieldset legend={`Дополнительные параметры`} modifier={`--checkbox`} error={false}>
      <input
        className="form-calculator__checkbox visually-hidden"
        type="checkbox"
        id="checkbox"
        name="maternal"
        checked={maternal}
        onChange={handleFieldChange}
      />
      <label className="form-calculator__label form-calculator__label--checkbox" htmlFor="checkbox">
        Использовать материнский капитал
      </label>
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
