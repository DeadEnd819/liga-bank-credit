import React from 'react';
import {connect} from 'react-redux';
import PromoSlider from '../promo-slider/promo-slider';
import Services from '../services/services';
import Calculator from '../calculator/calculator';
import Branches from '../branches/branches';
import AuthorizationModal from '../authorization-modal/authorization-modal';
import {getModalFlag} from '../../store/selectors';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Main = ({isModalOpen}) => {
  return (
    <main className="main">
      <h1 className="visually-hidden">Лига Банк - Кредитный калькулятор</h1>
      <PromoSlider />
      <Services />
      <Calculator />
      <Branches />
      {isModalOpen && <AuthorizationModal />}
    </main>
  );
};

const mapStateToProps = (store) => ({
  isModalOpen: getModalFlag(store)
});

export {Main};

export default connect(mapStateToProps)(Main);
