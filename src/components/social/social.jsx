import React from 'react';
import SocialItem from '../social-item/social-item';
import {SOCIAL_LINKS} from '../../const';

const Social = () => {
  return (
    <ul className="footer__item social">
      {SOCIAL_LINKS.map((link, index) => (
        <SocialItem key={link + index} link={link} />
      ))}
    </ul>
  );
};

export default Social;
