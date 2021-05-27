import React, {useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {ReactComponent as IconClose} from '../../assets/img/svg/icon-close.svg';
import {ReactComponent as IconLogo} from '../../assets/img/svg/logo-modal.svg';
import {ReactComponent as IconEye} from '../../assets/img/svg/icon-eye.svg';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
import {setPopupClose, setAuthorizationData, clearAuthorizationData} from '../../store/action';
import {getAuthorizationData} from '../../store/selectors';
import {extend} from '../../utils';
import PropTypes from 'prop-types';

const AuthorizationModal = ({authorizationData, setAuthorizationData, clearAuthorizationData, closeModal}) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const handleFieldChange = useCallback(({name, value}) => {
    setAuthorizationData(extend(authorizationData, {[name]: value}));

  }, [authorizationData, setAuthorizationData]);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    clearAuthorizationData();
    closeModal();
  };

  const handleButtonHiddenToggle = () => {
    setPasswordHidden((prevState) => !prevState);
  };

  return (
    <ModalWrapper block={`authorization`} onModalClose={closeModal}>
      <div className="authorization-modal__head-wrapper">
        <IconLogo className="authorization-modal__logo" alt="Иконка крестик" />
        <button
          className="authorization-modal__button-close button button--close"
          type="button"
          aria-label="Закрыть форму логина"
          onClick={closeModal}
        >
          <IconClose
            className="authorization-modal__button-icon authorization-modal__button-icon--close"
            alt="Иконка крестик"
          />
        </button>
      </div>
      <form
        className="authorization-modal__form form-modal"
        action="#"
        onSubmit={handleFormSubmit}
      >
        <ul className="form-modal__list">
          <li className="form-modal__item">
            <label className="form-modal__label" htmlFor="login">Логин</label>
            <input
              className="form-modal__input"
              autoFocus={true}
              type="text"
              id="login"
              name="login"
              value={authorizationData.login}
              required
              onChange={(evt) => handleFieldChange(evt.target)}
            />
          </li>
          <li className="form-modal__item">
            <label className="form-modal__label" htmlFor="password">Пароль</label>
            <input
              className="form-modal__input"
              type={isPasswordHidden ? `password` : `text`}
              id="password"
              name="password"
              value={authorizationData.password}
              required
              onChange={(evt) => handleFieldChange(evt.target)}
            />
            <button
              className="form-modal__button-eye button button--eye"
              type="button"
              aria-label="Показать пароль"
              onMouseDown={handleButtonHiddenToggle}
              onMouseUp={handleButtonHiddenToggle}
              onTouchStart={handleButtonHiddenToggle}
              onTouchEnd={handleButtonHiddenToggle}
            >
              <IconEye
                className="authorization-modal__button-icon authorization-modal__button-icon--eye"
                alt="Иконка крестик"
              />
            </button>
          </li>
        </ul>
        <div className="form-modal__button-wrapper">
          <button className="form-modal__button-submit" type="submit" aria-label="Войти">Войти</button>
          {/*eslint-disable-next-line*/}
          <a className="form-modal__link" href="#" aria-label="Восстановление пароля">Забыли пароль?</a>
        </div>
      </form>
    </ModalWrapper>
  );
};

AuthorizationModal.propTypes = {
  authorizationData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  setAuthorizationData: PropTypes.func.isRequired,
  clearAuthorizationData: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  authorizationData: getAuthorizationData(store)
});

const mapDispatchToProps = (dispatch) => ({
  closeModal() {
    dispatch(setPopupClose());
  },
  setAuthorizationData(data) {
    dispatch(setAuthorizationData(data));
  },
  clearAuthorizationData() {
    dispatch(clearAuthorizationData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationModal);
