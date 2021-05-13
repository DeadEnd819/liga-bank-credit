import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as IconMenu} from '../../assets/img/svg/icon-menu.svg';
import {ReactComponent as IconClose} from '../../assets/img/svg/icon-close.svg';
import {ReactComponent as IconLogin} from '../../assets/img/svg/icon-login.svg';
import {setModalOpen} from '../../store/action';

const MenuButtons = ({isMenuOpen, onMenuToggle, onMenuClose, openModal}) => {
  return (
    <div className="header__menu-buttons">
      <button
        className="header__menu-button button button--toggle"
        onClick={onMenuToggle}
      >
        <IconMenu className="button-icon button-icon--toggle" alt="Иконка меню" />
      </button>
      {
        !isMenuOpen ?
          <button
            className="header__menu-button button button--login"
            onClick={openModal}
          >
            <IconLogin className="button-icon button-icon--login" alt="Иконка входа"/>
          </button>
          :
          <button
            className="header__menu-button button button--close"
            onClick={onMenuClose}
          >
            <IconClose className="button-icon button-icon--close" alt="Иконка крестик" />
          </button>
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openModal() {
    dispatch(setModalOpen());
  },
});

export {MenuButtons};

export default connect(null, mapDispatchToProps)(MenuButtons);
