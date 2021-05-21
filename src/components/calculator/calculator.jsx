import React, {useState} from 'react';
import Wrapper from '../wrapper/wrapper';
import Select from '../select/select';
import Parameters from '../parameters/parameters';
import Offer from '../offer/offer';
import {OPTION_ITEMS} from '../../const';

const Calculator = () => {
  const [type, setType] = useState(null);

  const handleTypeChange = ({selectedItem}) => {
    setType(selectedItem);
  }

  const getTypeParameters = () => {
    switch (type) {
      case OPTION_ITEMS[0]:
        return <Parameters type={OPTION_ITEMS[0]} />;
      case OPTION_ITEMS[1]:
        return <Parameters type={OPTION_ITEMS[1]} />;
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
            {/*===========================STEP ONE===============================*/}
            <Select onTypeChange={handleTypeChange} items={OPTION_ITEMS} />
            {/*===========================STEP TWO===============================*/}
            {getTypeParameters()}
          </div>
          {/*===========================BLOCK OFFER===============================*/}
          {type && <Offer />}
        </form>
      </Wrapper>
    </section>
  );
};



export default Calculator;
