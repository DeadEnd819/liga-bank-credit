import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as IconMenu} from '../../assets/img/svg/icon-menu.svg';
import {ReactComponent as IconClose} from '../../assets/img/svg/icon-close.svg';
import {ReactComponent as IconLogin} from '../../assets/img/svg/icon-login.svg';
import {setModalOpen} from '../../store/action';
import PropTypes from 'prop-types';

const MenuButtons = ({isMenuOpen, onMenuToggle, onMenuClose, openModal}) => {
  return (
    <div className="header__menu-buttons">
      <button
        className="header__menu-button button button--toggle"
        type="button"
        aria-label="Переключения меню"
        onClick={onMenuToggle}
      >
        <IconMenu className="button-icon button-icon--toggle" alt="Иконка меню" />
      </button>

      {
        !isMenuOpen ?
          <button
            className="header__menu-button button button--login"
            type="button"
            aria-label="Войти в учетную запись"
            onClick={openModal}
          >
            <IconLogin className="button-icon button-icon--login" alt="Иконка входа"/>
          </button>
          :
          <button
            className="header__menu-button button button--close"
            type="button"
            aria-label="Закрыть меню"
            onClick={onMenuClose}
          >
            <IconClose className="button-icon button-icon--close" alt="Иконка крестик" />
          </button>
      }
    </div>
  );
};

MenuButtons.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuToggle: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  openModal() {
    dispatch(setModalOpen());
  },
});

export default connect(null, mapDispatchToProps)(MenuButtons);
