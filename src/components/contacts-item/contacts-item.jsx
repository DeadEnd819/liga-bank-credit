import React from 'react';

const ContactsItem = ({item}) => {
  const {type, number, text, icon: Icon} = item;

  return (
    <li className={`contacts__item contacts__item--${type}`}>
      <a className="contacts__link" href={`tel: ${number}`} aria-label={type}>
        <Icon className={`contacts__icon contacts__icon--${type}`} />
        {number}
      </a>
      <p className="contacts__text">{text}</p>
    </li>
  );
};

export default ContactsItem;
