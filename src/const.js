import React from 'react';
import facebook from './assets/img/svg/icon-facebook.svg';
import instagram from './assets/img/svg/icon-instagram.svg';
import twitter from './assets/img/svg/icon-twitter.svg';
import youtube from './assets/img/svg/icon-youtube.svg';
import mobile from './assets/img/svg/icon-mobile.svg';
import phone from './assets/img/svg/icon-phone.svg';

export const ACTIVE_PAGE = ``;

export const STORE_CREDIT_DATA_PREFIX = `liga-bank-localstorage-credit-data`;
export const STORE_AUTHORIZED_DATA_PREFIX = `liga-bank-localstorage-authorization-data`;
export const STORE_VERSION = `v1`;
export const STORE_CREDIT_DATA_NAME = `${STORE_CREDIT_DATA_PREFIX}-${STORE_VERSION}`;
export const STORE_AUTHORIZED_DATA_NAME = `${STORE_AUTHORIZED_DATA_PREFIX}-${STORE_VERSION}`;

export const TabNames = {
  DEPOSITS: `Вклады`,
  CREDITS: `Кредиты`,
  INSURANCE: `Страхование`,
  SERVICES: `Онлайн-сервисы`
};

export const ActionType = {
  ADD_CREDIT: `ADD_CREDIT`,
  MODAL_OPEN: `MODAL_OPEN`,
  MODAL_CLOSE: `MODAL_CLOSE`,
  AUTHORIZED_SAVE_DATA: `AUTHORIZED_SAVE_DATA`,
  AUTHORIZED_CLEAR_DATA: `AUTHORIZED_CLEAR_DATA`,
  REQUIRED_INPUT_CHANGE: `REQUIRED_INPUT_CHANGE`
};

export const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
}

export const NAVIGATION_ITEMS = [
  {
    name: `Услуги`,
    href: `#`
  },
  {
    name: `Рассчитать кредит`,
    href: `#`
  },
  {
    name: `Конвертер валют`,
    href: `#`
  },
  {
    name: `Контакты`,
    href: `#`
  },
  {
    name: `Задать вопрос`,
    href: `#`
  }
];

export const CONTACTS_ITEMS = [
  {
    type: `mobile`,
    number: `*0904`,
    text: `Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2`,
    icon: mobile
  },
  {
    type: `phone`,
    number: `8 800 111 22 33`,
    text: `Бесплатный для всех городов России`,
    icon: phone
  }
];

export const SOCIAL_LINKS = [
  {
    name: `facebook`,
    src: `https://www.facebook.com`,
    icon: facebook
  },
  {
    name: `instagram`,
    src: `https://www.instagram.com`,
    icon: instagram
  },
  {
    name: `twitter`,
    src: `https://www.twitter.com`,
    icon: twitter
  },
  {
    name: `youtube`,
    src: `https://www.youtube.com`,
    icon: youtube
  },
];

export const PROMOS = [
  {
    className: `--credit`,
    description: `Кредиты на любой случай`,
    link: {
      title: `Рассчитать кредит`,
      href: `#`
    }
  },
  {
    className: `--man`,
    description: `Ваша уверенность в завтрашнем дне`,
    link: null
  },
  {
    className: `--girl`,
    description: `Всегда рядом`,
    link: {
      title: `Найти отделение`,
      href: `#`
    }
  },
];

export const SERVICES = [
  {
    className: `--piggy`,
  title: `Вклады Лига Банка — это выгодная инвестиция в свое будущее`,
    list: [
      `Проценты по вкладам до 7%`,
      `Разнообразные условия`,
      `Возможность ежемесячной
       капитализации или вывод
       процентов на банковскую карту`,
    ],
    description: null,
    link: {
      title: `Узнать подробнее`,
      href: `#`
    },
  },
  {
    className: `--car`,
    title: `Лига Банк выдает кредиты под любые цели`,
    list: [
      `Ипотечный кредит`,
      `Автокредит`,
      `Потребительский кредит`,
    ],
    description: <p className="card-service__description">
                    <>Рассчитайте ежемесячный платеж <br/>и ставку по кредиту воспользовавшись нашим </>
                    <a className="card-service__description-link" href="#calculator">кредитным калькулятором</a>
                 </p>,
    link: null,
  },
  {
    className: `--lock`,
    title: `Лига Страхование — застрахуем все что захотите`,
    list: [
      `Автомобильное страхование`,
      `Страхование жизни и здоровья`,
      `Страхование недвижимости`,
    ],
    description: null,
    link: {
      title: `Узнать подробнее`,
      href: `#`
    },
  },
  {
    className: `--mobile`,
    title: `Лига Банк — это огромное количество онлайн-сервисов для вашего удобства`,
    list: [
      `Мобильный банк, который всегда под рукой`,
      `Приложение Лига-проездной позволит вам оплачивать билеты по всему миру`,
    ],
    description: null,
    link: {
      title: `Узнать подробнее`,
      href: `#`
    },
  },
];
