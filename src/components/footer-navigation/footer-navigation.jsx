import React from 'react';
import NavigationItem from '../navigation-item/navigation-item';
import {NAVIGATION_ITEMS} from '../../const';

const FooterNavigation = () => {
  return (
    <ul className="footer__item footer-nav">
      {NAVIGATION_ITEMS.map((title, index) => {

        if(title.name !== NAVIGATION_ITEMS[2].name) {
          return (
            <NavigationItem
              key={title + index}
              block={`footer`}
              title={title}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default FooterNavigation;
