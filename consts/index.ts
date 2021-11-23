export enum PathRoutes {
  HOME = '/',
  LOGIN = '/login',
  REGISTRATION = '/registarion',
  REVIEWS = '/reviews',
  CONTACTS = '/contacts',
  ACTIVATE = '/activate',
  RESET = '/reset',
  CART = '/cart',
  CAR_COLOR = '/car_color',
}

export const menuItems = [
  {
    name: 'Главная',
    path: PathRoutes.HOME,
  },
  {
    name: 'Отзывы',
    path: PathRoutes.REVIEWS,
  },
  {
    name: 'Контакты',
    path: PathRoutes.CONTACTS,
  },
  {
    name: 'Код краски',
    path: PathRoutes.CAR_COLOR,
  },
];

export enum socials {
  TELEGRAM = 'telegram',
  VIBER = 'viber',
  WHATSAPP = 'whatsapp',
}

export const messagers = [
  {
    name: 'Telegram',
    img: socials.TELEGRAM,
    link: 'https://t.me/qb_wht',
  },
  {
    name: 'Viber',
    img: socials.VIBER,
    link: 'https://t.me/qb_wht',
  },
  {
    name: 'WhatsApp',
    img: socials.WHATSAPP,
    link: 'https://t.me/qb_wht',
  },
];

export const PHONE = '78005553535';
export const MAX_CLIENT_WIDTH_MOBILE = 713;
