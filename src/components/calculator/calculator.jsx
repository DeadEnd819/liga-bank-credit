import React from 'react';
import {connect} from 'react-redux';
import loadable from '@loadable/component';
import Wrapper from '../wrapper/wrapper';
import Select from '../select/select';
import {OPTION_ITEMS, CreditTypes} from '../../const';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';
import PropTypes from 'prop-types';

const Parameters = loadable(() => import('../parameters/parameters'));
const Offer = loadable(() => import('../offer/offer'));

const Calculator = ({creditData, setCredit}) => {
  const {type}= creditData;

  const handleTypeChange = ({selectedItem}) => {
    switch (selectedItem) {
      case OPTION_ITEMS[0]:
        setCredit({type: CreditTypes.HOME});
        break;
      case OPTION_ITEMS[1]:
        setCredit({type: CreditTypes.CAR});
        break;
      default:
        return null;
    }
  }

  return (
    <section className="main__calculator calculator" id="calculator">
      <Wrapper name={`calculator`}>
        <h2 className="calculator__title">Кредитный калькулятор</h2>
        <form action="#" className="calculator__form form-calculator">
          <div className="form-calculator__wrapper">
            <Select onTypeChange={handleTypeChange} items={OPTION_ITEMS} />
            {type && <Parameters />}
          </div>
          {type && <Offer />}
        </form>
      </Wrapper>
    </section>
  );
};

Calculator.propTypes = {
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

export {Calculator};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
