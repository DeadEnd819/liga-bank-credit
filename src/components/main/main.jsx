import React from 'react';
import {connect} from 'react-redux';
import {useWebPSupportCheck} from "react-use-webp-support-check";
import PromoSlider from '../promo-slider/promo-slider';
import Services from '../services/services';
import Calculator from '../calculator/calculator';
import FeedbackForm from '../feedback-form/feedback-form';
import FeedbackModal from '../feedback-modal/feedback-modal';
import AuthorizationModal from '../authorization-modal/authorization-modal';
import Branches from '../branches/branches';
import {getFeedbackFlag, getModalFlag, getFeedbackModalFlag} from '../../store/selectors';
import PropTypes from 'prop-types';

const Main = ({isFeedbackOpen, isModalOpen, isFeedbackModalOpen}) => {
  const supportsWebP = useWebPSupportCheck();

  return (
    <main className="main">
      <h1 className="visually-hidden">Лига Банк - Кредитный калькулятор</h1>
      <PromoSlider isWebp={supportsWebP} />
      <Services isWebp={supportsWebP} />
      <Calculator />
      {isFeedbackOpen && <FeedbackForm />}
      <Branches />
      {isFeedbackModalOpen && <FeedbackModal />}
      {isModalOpen && <AuthorizationModal />}
    </main>
  );
};

Main.propTypes = {
  isFeedbackOpen: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isFeedbackModalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (store) => ({
  isFeedbackOpen: getFeedbackFlag(store),
  isModalOpen: getModalFlag(store),
  isFeedbackModalOpen: getFeedbackModalFlag(store)
});

export default connect(mapStateToProps)(Main);
