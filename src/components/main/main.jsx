import React from 'react';
import {connect} from 'react-redux';
import loadable from '@loadable/component';
import Branches from '../branches/branches';
import {getFeedbackFlag, getModalFlag, getFeedbackModalFlag} from '../../store/selectors';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {canUseWebp} from '../../utils';

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
  // const webP = canUseWebp();
  // console.log(webP);
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
