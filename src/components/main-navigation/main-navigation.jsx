import React from 'react';
import {connect} from "react-redux";
import NavigationItem from '../navigation-item/navigation-item';
import {ReactComponent as IconLogin} from '../../assets/img/svg/icon-login.svg';
import {NAVIGATION_ITEMS, ACTIVE_PAGE} from '../../const';
import {setModalOpen} from "../../store/action";

const MainNavigation = ({openModal, modifierName}) => {
  const handleModalOpen = (evt) => {
    evt.preventDefault();
    openModal()
  };

  return (
    <nav className={`header__nav main-nav${modifierName ? ` main-nav${modifierName}` : modifierName}`}>
      <ul className="main-nav__list main-nav__list--site">
        {NAVIGATION_ITEMS.map((title, index) => {
          const isActive = title.name === ACTIVE_PAGE;

          if(title.name !== NAVIGATION_ITEMS[4].name) {
            return (
              <NavigationItem
                key={title + index}
                block={`main`}
                title={title}
                isActive={isActive}
              />
            );
          }
          return null;
        })}
      </ul>
      <ul className="main-nav__list main-nav__list--user">
        <li className="main-nav__item main-nav__item--user">
          {/*eslint-disable-next-line*/}
          <a
            href="#"
            className="main-nav__link main-nav__link--user"
            aria-label="Перейти на страницу авторизации"
            onClick={handleModalOpen}
          >
            <IconLogin className="main-nav__link-icon" alt="Иконка входа" />
            <p className="main-nav__link-title">Войти в Интернет-банк</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openModal() {
    dispatch(setModalOpen());
  },
});

export {MainNavigation};

export default connect(null, mapDispatchToProps)(MainNavigation);
