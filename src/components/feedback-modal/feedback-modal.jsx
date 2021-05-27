import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as IconClose} from '../../assets/img/svg/icon-close.svg';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
import {setRequestModalClose} from '../../store/action';
import PropTypes from 'prop-types';

const FeedbackModal = ({closeModal}) => {
  return (
    <ModalWrapper block={`feedback`} onModalClose={closeModal}>
      <h3 className="feedback-modal__title">Спасибо за обращение в наш банк</h3>
      <button
        className="feedback-modal__button-close button button--close"
        type="button"
        aria-label="Закрыть окно"
        onClick={closeModal}
      >
        <IconClose
          className="feedback-modal__button-icon feedback-modal__button-icon--close"
          alt="Иконка крестик"
        />
      </button>
      <p className="feedback-modal__description">
        Наш менеджер скоро свяжется с вами по указанному номеру телефона
      </p>
    </ModalWrapper>
  );
};

FeedbackModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  closeModal() {
    dispatch(setRequestModalClose());
  },
});

export {FeedbackModal};

export default connect(null, mapDispatchToProps)(FeedbackModal);
