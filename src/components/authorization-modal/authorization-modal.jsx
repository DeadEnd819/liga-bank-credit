import React, {useState, useRef, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {useEscapeButton} from '../../hooks/use-escape-button';
import {ReactComponent as IconClose} from '../../assets/img/svg/icon-close.svg';
import {ReactComponent as IconLogo} from '../../assets/img/svg/logo-modal.svg';
import {ReactComponent as IconEye} from '../../assets/img/svg/icon-eye.svg';
import {setPopupClose, setAuthorizationData, clearAuthorizationData} from '../../store/action';
import {getAuthorizationData} from '../../store/selectors';
import {extend} from '../../utils';

const AuthorizationModal = ({authorizationData, setAuthorizationData, clearAuthorizationData, closeModal}) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const inputLogin = useRef(null);

  useEffect(() => {
    document.body.style.overflow = `hidden`;
    inputLogin.current.focus();

    return () => {
      document.body.style.overflow = `auto`
    };
  },[]);

  useEscapeButton(closeModal);

  const handleFieldChange = useCallback(({name, value}) => {
    setAuthorizationData(extend(authorizationData, {[name]: value}));

  }, [authorizationData, setAuthorizationData]);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    clearAuthorizationData();
    closeModal();
  };

  const handlePasswordHidden = () => {
    setPasswordHidden((prevState) => !prevState);
  };

  const handleBlockClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="authorization-modal" onClick={handleBlockClick}>
      <div className="authorization-modal__wrapper">
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
          className="authorization-modal__form form"
          action="#"
          onSubmit={handleFormSubmit}
        >
          <ul className="form__list">
            <li className="form__item">
              <label className="form__label" htmlFor="login">Логин</label>
              <input
                className="form__input"
                ref={inputLogin}
                type="text"
                id="login"
                name="login"
                value={authorizationData.login}
                required
                onChange={(evt) => handleFieldChange(evt.target)}
              />
            </li>
            <li className="form__item">
              <label className="form__label" htmlFor="password">Пароль</label>
              <input
                className="form__input"
                type={isPasswordHidden ? `password` : `text`}
                id="password"
                name="password"
                value={authorizationData.password}
                required
                onChange={(evt) => handleFieldChange(evt.target)}
              />
              <button
                className="form__button-eye button"
                type="button"
                aria-label="Показать пароль"
                onMouseDown={handlePasswordHidden}
                onMouseUp={handlePasswordHidden}
              >
                <IconEye
                  className="authorization-modal__button-icon authorization-modal__button-icon--eye"
                  alt="Иконка крестик"
                />
              </button>
            </li>
          </ul>
          <div className="form__button-wrapper">
            <button className="form__button-submit" type="submit" aria-label="Войти">Войти</button>
            {/*eslint-disable-next-line*/}
            <a className="form__link" href="#"  aria-label="Восстановление пароля">Забыли пароль?</a>
          </div>
        </form>
      </div>
    </div>
  );
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

export {AuthorizationModal};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationModal);
