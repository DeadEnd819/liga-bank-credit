import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Credit from '../credit/credit';
import Contribution from '../contribution/contribution';
import Time from '../time/time';
import Extra from '../extra/extra';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';
import {InitialValues} from '../../const';

const Parameters = ({creditData, setCredit}) => {
  const {type} = creditData;
  const {CREDIT, CONTRIBUTION, TIME} = InitialValues[type]

  useEffect(() => {
    setCredit({
      credit: InitialValues[type].CREDIT.min,
      contribution: Math.round(InitialValues[type].CREDIT.min / 100 * 10),
      time: InitialValues[type].TIME.min,
    });
  }, [type, setCredit]);

  return (
    <div className="form-calculator__wrapper-step">
      <h3 className="form-calculator__title form-calculator__title--parameters">Шаг 2. Введите параметры кредита</h3>
      <Credit initialValues={CREDIT} />
      <Contribution initialValues={CONTRIBUTION} />
      <Time initialValues={TIME} />
      <Extra />
    </div>
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

export {Parameters};

export default connect(mapStateToProps, mapDispatchToProps)(Parameters);
