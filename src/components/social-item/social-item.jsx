import React from 'react';
import PropTypes from 'prop-types';

const SocialItem = ({link}) => {
  const {name, src, icon: Icon} = link;

  return (
    <li className={`social__item social__item--${name}`}>
      <a className="social__link" href={src} aria-label={name}>
        <Icon className={`social__icon social__icon--${name}`} />
      </a>
    </li>
  );
};

SocialItem.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
};

export default SocialItem;
