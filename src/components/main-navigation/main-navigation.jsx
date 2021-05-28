import React from 'react';
import {connect} from "react-redux";
import NavigationItem from '../navigation-item/navigation-item';
import {ReactComponent as IconLogin} from '../../assets/img/svg/icon-login.svg';
import {NAVIGATION_ITEMS} from '../../const';
import {setModalOpen} from "../../store/action";
import PropTypes from 'prop-types';
import {useOverflowHidden} from '../../hooks/use-owerflow-hidden';

const MainNavigation = ({openModal, isTablet}) => {
  useOverflowHidden(!isTablet);

  const handleModalOpen = (evt) => {
    evt.preventDefault();
    openModal()
  };

  return (
    <nav className={`header__nav main-nav${!isTablet ? ` main-nav--mobile` : ``}`}>
      <ul className="main-nav__list main-nav__list--site">
        {NAVIGATION_ITEMS.map((title, index) => {
          if(title.name !== NAVIGATION_ITEMS[4].name) {
            return (
              <NavigationItem
                key={title + index}
                block={`main`}
                title={title}
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

MainNavigation.propTypes = {
  openModal: PropTypes.func.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  openModal() {
    dispatch(setModalOpen());
  },
});

export default connect(null, mapDispatchToProps)(MainNavigation);
