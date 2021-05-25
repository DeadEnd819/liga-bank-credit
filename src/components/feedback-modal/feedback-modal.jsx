import React from 'react';
import {ReactComponent as IconClose} from '../../assets/img/svg/icon-close.svg';

const FeedbackModal = () => {
  return (
    <div className="feedback-modal">
      <div className="feedback-modal__wrapper">
        <h3 className="feedback-modal__title">Спасибо за обращение в наш банк</h3>
        <button
          className="feedback-modal__button-close button button--close"
          type="button"
          aria-label="Закрыть окно"
        >
          <IconClose
            className="feedback-modal__button-icon feedback-modal__button-icon--close"
            alt="Иконка крестик"
          />
        </button>
        <p className="feedback-modal__description">
          Наш менеджер скоро свяжется с вами по указанному номеру телефона
        </p>
      </div>
    </div>
  );
};

export default FeedbackModal;
