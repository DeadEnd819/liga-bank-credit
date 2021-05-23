import React, {memo} from 'react';
import {connect} from 'react-redux';
import Wrapper from '../wrapper/wrapper';
import Select from '../select/select';
import Parameters from '../parameters/parameters';
import Offer from '../offer/offer';
import {OPTION_ITEMS, CreditTypes} from '../../const';
import {getCredit} from '../../store/selectors';
import {setCredit} from '../../store/action';

const MemoParameters = memo(Parameters);
const MemoOffer = memo(Offer);

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
    <section className="main__calculator calculator" style={{marginBottom: "50px"}}>
      <Wrapper name={`calculator`}>
        <h2 className="calculator__title">Кредитный калькулятор</h2>
        <form action="#" className="calculator__form form-calculator" onSubmit={(evt) => console.log(evt)}>
          <div className="form-calculator__wrapper">
            <Select onTypeChange={handleTypeChange} items={OPTION_ITEMS} />
            {type && <MemoParameters />}
          </div>
          {type && <MemoOffer />}
        </form>
      </Wrapper>
    </section>
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

export {Calculator};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
