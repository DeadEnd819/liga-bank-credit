import React from 'react';
import {connect} from 'react-redux';
import PromoSlider from '../promo-slider/promo-slider';
import Services from '../services/services';
import Calculator from '../calculator/calculator';
import Branches from '../branches/branches';
import FeedbackForm from '../feedback-form/feedback-form';
import AuthorizationModal from '../authorization-modal/authorization-modal';
import FeedbackModal from '../feedback-modal/feedback-modal';
import {getFeedbackFlag, getModalFlag, getFeedbackModalFlag} from '../../store/selectors';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Main = ({isFeedbackOpen, isModalOpen, isFeedbackModalOpen}) => {
  return (
    <main className="main">
      <h1 className="visually-hidden">Лига Банк - Кредитный калькулятор</h1>
      <PromoSlider />
      <Services />
      <Calculator />
      {isFeedbackOpen && <FeedbackForm />}
      <Branches />
      {isFeedbackModalOpen && <FeedbackModal />}
      {isModalOpen && <AuthorizationModal />}
    </main>
  );
};

const mapStateToProps = (store) => ({
  isFeedbackOpen: getFeedbackFlag(store),
  isModalOpen: getModalFlag(store),
  isFeedbackModalOpen: getFeedbackModalFlag(store)
});

export {Main};

export default connect(mapStateToProps)(Main);
