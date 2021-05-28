import React from 'react';
import {connect} from 'react-redux';
import loadable from '@loadable/component';
import {useWebPSupportCheck} from "react-use-webp-support-check";
import Branches from '../branches/branches';
import {getFeedbackFlag, getModalFlag, getFeedbackModalFlag} from '../../store/selectors';
import PropTypes from 'prop-types';

const PromoSlider = loadable(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "promo" */
  '../promo-slider/promo-slider'
  ));
const Services = loadable(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "services" */
  '../services/services'
  ));
const Calculator = loadable(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "calculator" */
  '../calculator/calculator'
  ));
const FeedbackForm = loadable(() => import('../feedback-form/feedback-form'));
const FeedbackModal = loadable(() => import('../feedback-modal/feedback-modal'));
const AuthorizationModal = loadable(() => import('../authorization-modal/authorization-modal'));

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
