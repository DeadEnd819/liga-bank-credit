import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = ({block, title}) => {
  const {name, href} = title;

  return (
    <li className={`${block}-nav__item`}>
      {/*eslint-disable-next-line*/}
      <a href={href} className={`${block}-nav__link`} aria-label={name}>{name}</a>
    </li>
  );
};

NavigationItem.propTypes = {
  block: PropTypes.string.isRequired,
  title: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavigationItem;
