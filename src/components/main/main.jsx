import React from 'react';
import {connect} from 'react-redux';
import PromoSlider from '../promo-slider/promo-slider';
import AuthorizationModal from '../authorization-modal/authorization-modal';
import {getModalFlag} from '../../store/selectors';

const Main = ({isModalOpen}) => {
  return (
    <main className="main">
      <PromoSlider />
      {isModalOpen && <AuthorizationModal />}
    </main>
  );
};

const mapStateToProps = (store) => ({
  isModalOpen: getModalFlag(store)
});

export {Main};

export default connect(mapStateToProps)(Main);
