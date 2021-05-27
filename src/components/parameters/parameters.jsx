import React, {useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import Credit from '../credit/credit';
import Contribution from '../contribution/contribution';
import Time from '../time/time';
import Extra from '../extra/extra';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';
import {InitialValues, DefaultCredit} from '../../const';
import {extend} from '../../utils';
import PropTypes from 'prop-types';

const Parameters = ({creditData, setCredit}) => {
  const {type} = creditData;
  const {CREDIT, CONTRIBUTION, TIME} = InitialValues[type]

  useEffect(() => {
    setCredit({
      credit: DefaultCredit[type],
      time: InitialValues[type].TIME.min,
      maternal: false,
      casco: false,
      insurance: false
    });
  }, [type, setCredit]);

  const handleFieldChange = useCallback(({name, value}) => {
    if (typeof value === `boolean`) {
      setCredit(extend(creditData,{[name]: value}));
      return;
    }

    setCredit(extend(creditData,{[name]: +value}));
  }, [creditData, setCredit]);

  return (
    <div className="form-calculator__wrapper-step">
      <h3 className="form-calculator__title form-calculator__title--parameters">Шаг 2. Введите параметры кредита</h3>
      <Credit initialValues={CREDIT} onFieldChang={handleFieldChange} />
      <Contribution initialValues={CONTRIBUTION} onFieldChang={handleFieldChange} />
      <Time initialValues={TIME} onFieldChang={handleFieldChange} />
      <Extra onFieldChang={handleFieldChange} />
    </div>
  );
};

Parameters.propTypes = {
  creditData: PropTypes.shape({
    type: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
    contribution: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    maternal: PropTypes.bool.isRequired,
    casco: PropTypes.bool.isRequired,
    insurance: PropTypes.bool.isRequired,
  }).isRequired,
  setCredit: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  creditData: getCredit(store)
});

const mapDispatchToProps = (dispatch) => ({
  setCredit(data) {
    dispatch(setCredit(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Parameters);
