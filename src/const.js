import facebook from './assets/img/svg/icon-facebook.svg';
import instagram from './assets/img/svg/icon-instagram.svg';
import twitter from './assets/img/svg/icon-twitter.svg';
import youtube from './assets/img/svg/icon-youtube.svg';
import mobile from './assets/img/svg/icon-mobile.svg';
import phone from './assets/img/svg/icon-phone.svg';

export const ACTIVE_PAGE = `Рассчитать кредит`;

export const STORE_CREDIT_DATA_PREFIX = `liga-bank-localstorage-credit-data`;
export const STORE_AUTHORIZED_DATA_PREFIX = `liga-bank-localstorage-authorization-data`;
export const STORE_VERSION = `v1`;
export const STORE_CREDIT_DATA_NAME = `${STORE_CREDIT_DATA_PREFIX}-${STORE_VERSION}`;
export const STORE_AUTHORIZED_DATA_NAME = `${STORE_AUTHORIZED_DATA_PREFIX}-${STORE_VERSION}`;

export const TabNames = {
  FEATURE: `Характеристики`,
  REVIEWS: `Отзывы`,
  CONTACTS: `Контакты`
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
