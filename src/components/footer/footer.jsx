import React from 'react';
import Copyright from '../copyright/copyright';
import FooterNavigation from '../footer-navigation/footer-navigation';
import Contacts from '../contacts/contacts';
import Social from '../social/social';
import Wrapper from '../wrapper/wrapper';

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper name={`footer`}>
        <Copyright />
        <FooterNavigation />
        <Contacts />
        <Social />
      </Wrapper>
    </footer>
  );
};

export default Footer;
