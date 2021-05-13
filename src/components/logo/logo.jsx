import React from 'react';
import PropTypes from 'prop-types';
import IconLogoDesktop from '../../assets/img/svg/logo-desktop.svg';
import IconLogoTablet from '../../assets/img/svg/logo-tablet.svg';
import IconLogoMobile from '../../assets/img/svg/logo-mobile.svg';

const Logo = ({block}) => {
  return (
    <div className={`${block}__logo`}>
      {/*eslint-disable-next-line*/}
      <a href="#" aria-label="Перейти на главную страницу">
        <picture>
          <source media="(min-width: 1150px)" srcSet={IconLogoDesktop} />
            <source media="(min-width: 768px)" srcSet={IconLogoTablet} />
              <img className="page-header__logo-image" src={IconLogoMobile}
                   alt="Лого Лига Банк" />
        </picture>
      </a>
    </div>
  );
};

Logo.propTypes = {
  block: PropTypes.string.isRequired,
};

export default Logo;
