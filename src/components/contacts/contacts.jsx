import React from 'react';
import ContactsItem from '../contacts-item/contacts-item';
import {CONTACTS_ITEMS} from '../../const';

const Contacts = () => {
  return (
    <ul className="footer__item contacts">
      {CONTACTS_ITEMS.map((item, index) => (
        <ContactsItem key={item + index} item={item} />
      ))}
    </ul>
  );
};

export default Contacts;
