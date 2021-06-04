import React from 'react';
import {ReactComponent as facebook} from './assets/img/svg/icon-facebook.svg';
import {ReactComponent as instagram} from './assets/img/svg/icon-instagram.svg';
import {ReactComponent as twitter} from './assets/img/svg/icon-twitter.svg';
import {ReactComponent as youtube} from './assets/img/svg/icon-youtube.svg';
import {ReactComponent as mobile} from './assets/img/svg/icon-mobile.svg';
import {ReactComponent as phone} from './assets/img/svg/icon-phone.svg';

export const SELECT_DEFAULT_TITLE = `Выберите цель кредита`;
export const OPTION_ITEMS = [`Ипотечное кредитование`, `Автомобильное кредитование`];

export const STORE_CREDIT_DATA_PREFIX = `liga-bank-localstorage-credit-data`;
export const STORE_OFFER_PREFIX = `liga-bank-localstorage-offer`;
export const STORE_REQUEST_PREFIX = `liga-bank-localstorage-request`;
export const STORE_REQUEST_LIST_PREFIX = `liga-bank-localstorage-request-list`;
export const STORE_AUTHORIZED_DATA_PREFIX = `liga-bank-localstorage-authorization-data`;
export const STORE_VERSION = `v1`;
export const STORE_CREDIT_DATA_NAME = `${STORE_CREDIT_DATA_PREFIX}-${STORE_VERSION}`;
export const STORE_AUTHORIZED_DATA_NAME = `${STORE_AUTHORIZED_DATA_PREFIX}-${STORE_VERSION}`;
export const STORE_REQUEST_DATA_NAME = `${STORE_REQUEST_PREFIX}-${STORE_VERSION}`;
export const STORE_REQUEST_LIST_DATA_NAME = `${STORE_REQUEST_LIST_PREFIX}-${STORE_VERSION}`;
export const STORE_OFFER_DATA_NAME = `${STORE_OFFER_PREFIX}-${STORE_VERSION}`;

export const MATERNAL= 470000;
export const CAR_PRICE_BAR = 2000000;
export const HOME_PERCENTAGE_BAR = 15;
export const MONTHS  = 12;
export const PERCENTAGE_OF_SALARY = 45;
export const FULL_PERCENTAGE = 100;
export const PHONE_LENGTH = 10;
export const INPUT_MAX_LENGTH = 8;

export const PROMO_SLIDER_OPTIONS = {
  autoPlay: true,
  interval: 4000,
  transitionTime: 1000,
};

export  const SERVICES_SLIDER_OPTIONS = {
  autoPlay: false,
  interval: 86400000,
  transitionTime: 800,
};

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
      href: `#calculator`
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
      href: `#branches`
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

export const MAP_DATA = {
  lat: 56.123,
  lng: 59.540,
  zoom: 5
};

export const MAP_POINTS = [
  {
    lat: 56.203,
    lng: 37.595,
    title: `Москва`
  },
  {
    lat: 51.533,
    lng: 46.000,
    title: `Саратов`
  },
  {
    lat: 56.210,
    lng: 49.100,
    title: `Казань`
  },
  {
    lat: 57.165,
    lng: 65.540,
    title: `Тюмень`
  },
  {
    lat: 54.989,
    lng: 73.350,
    title: `Омск`
  },
  {
    lat: 55.541,
    lng: 82.880,
    title: `Новосибирск`
  },
  {
    lat: 61.650,
    lng: 73.390,
    title: `Сургут`
  },
  {
    lat: 58.350,
    lng: 56.250,
    title: `Пермь`
  }
];

export  const WindowWidth = {
  TABLET: 767,
  DESKTOP: 1023
};

export const DefaultCredit = {
  HOME: 2000000,
  CAR: 1000000
};

export const MinimumCredit = {
  HOME: 500000,
  CAR: 200000
};

export const InterestRates = {
  HOME_MINIMUM: `8.50`,
  HOME_MAXIMUM: `9.40`,
  CAR_MINIMUM: `15`,
  CAR_MAXIMUM: `16`,
  CASCO_AND_INSURANCE: `3.50`,
  CASCO_OR_INSURANCE: `8.50`,
};

export const ParametersNames = {
  CREDIT: `credit`,
  CONTRIBUTION: `contribution`,
  TIME: `time`,
  MATERNAL: `maternal`,
  CASCO: `casco`,
  INSURANCE: `insurance`
};

export const TabNames = {
  DEPOSITS: `Вклады`,
  CREDITS: `Кредиты`,
  INSURANCE: `Страхование`,
  SERVICES: `Онлайн-сервисы`
};

export const ActionType = {
  ADD_CREDIT: `ADD_CREDIT`,
  ADD_OFFER: `ADD_OFFER`,
  CLEAR_CREDIT: `CLEAR_CREDIT`,
  MODAL_OPEN: `MODAL_OPEN`,
  MODAL_CLOSE: `MODAL_CLOSE`,
  AUTHORIZED_SAVE_DATA: `AUTHORIZED_SAVE_DATA`,
  AUTHORIZED_CLEAR_DATA: `AUTHORIZED_CLEAR_DATA`,
  FEEDBACK_OPEN: `FEEDBACK_OPEN`,
  FEEDBACK_CLOSE: `FEEDBACK_CLOSE`,
  REQUEST_ADD: `REQUEST_ADD`,
  DATA_CHANGE: `DATA_CHANGE`,
  ERROR_CHANGE: `ERROR_CHANGE`
};

export const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
};

export const IdButton = {
  INCREMENT: `increment`,
  DECREMENT: `decrement`
};

export const CheckboxType = {
  MATERNAL: `maternal`,
  CASCO: `casco`,
  INSURANCE: `insurance`
};

export const CheckboxLabels = {
  MATERNAL: `Использовать материнский капитал`,
  CASCO: `Оформить КАСКО в нашем банке`,
  INSURANCE: `Оформить Страхование жизни в нашем банке`
};

export const CreditTypes = {
  HOME: `HOME`,
  CAR: `CAR`
};

export const InitialValues = {
  HOME: {
    CREDIT: {
      min: 1200000,
      max: 25000000,
      step: 100000
    },
    CONTRIBUTION: {
      min: 10,
      max: 100,
      step: 5,
    },
    TIME: {
      min: 5,
      max: 30,
      step: 1,
    }
  },
  CAR: {
    CREDIT: {
      min: 500000,
      max: 5000000,
      step: 50000
    },
    CONTRIBUTION: {
      min: 20,
      max: 100,
      step: 5,
    },
    TIME: {
      min: 1,
      max: 5,
      step: 1,
    }
  }
};
