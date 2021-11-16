export enum PathRoutes {
  HOME = '/',
  LOGIN = '/login',
  REGISTRATION = '/registarion',
  REVIEWS = '/reviews',
  CONTACTS = '/contacts',
  PAINT = '/paint',
  ACTIVATE = '/activate',
  RESET = '/reset',
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
    path: PathRoutes.PAINT,
  },
];

export const messagers = [
  {
    name: 'Телеграм',
    icon: 'fal fa-comment',
  },
  {
    name: 'Viber',
    icon: 'fal fa-circle',
  },
  {
    name: 'WhatsApp',
    icon: 'fal fa-envelope',
  },
];

export const PHONE = '78005553535';
export const MAX_CLIENT_WIDTH_MOBILE = 713;
