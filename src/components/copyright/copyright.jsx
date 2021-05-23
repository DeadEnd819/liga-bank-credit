import React from 'react';
import Logo from '../logo/logo';

const Copyright = () => {
  return (
    <div className="footer__item copyright">
      <Logo block={`copyright`} />
      <p className="copyright__text">150015, г. Москва, ул. Московская, д. 32</p>
      <p className="copyright__text">Генеральная лицензия Банка России №1050</p>
      <p className="copyright__text"><span className="copyright__icon">&copy;</span> Лига Банк, 2019</p>
    </div>
  );
};

export default Copyright;
