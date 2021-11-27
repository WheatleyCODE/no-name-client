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
    icon: 'fal fa-home',
  },
  {
    name: 'Отзывы',
    path: PathRoutes.REVIEWS,
    icon: 'fal fa-comment-lines',
  },
  {
    name: 'Контакты',
    path: PathRoutes.CONTACTS,
    icon: 'fal fa-address-book',
  },
  {
    name: 'Код краски',
    path: PathRoutes.CAR_COLOR,
    icon: 'fal fa-car-side',
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

export const categoriesMenuItems = [
  {
    name: 'Кисточки для подкраски',
    icon: 'fal fa-paint-brush',
    items: [
      {
        title: 'Ремонт сколов / царапин',
        links: [
          {
            name: 'Эмаль по коду цвета автомобиля',
            path: PathRoutes.HOME,
          },
          {
            name: 'Акриловый лак',
            path: PathRoutes.HOME,
          },
          {
            name: 'Акриловый грунт',
            path: PathRoutes.HOME,
          },
          {
            name: 'Преобразователь ржавчины',
            path: PathRoutes.HOME,
          },
        ],
      },
      {
        title: 'Ral, RAL design',
        links: [
          {
            name: 'Эмали RAL',
            path: PathRoutes.HOME,
          },
          {
            name: 'Эмали RAL design',
            path: PathRoutes.HOME,
          },
          {
            name: 'Эмали еще что нибудь',
            path: PathRoutes.HOME,
          },
          {
            name: 'МОковый тект',
            path: PathRoutes.HOME,
          },
        ],
      },
    ],
  },
  {
    name: 'Маркеры для подкраски',
    icon: 'fal fa-highlighter',
    items: [
      {
        title: 'Ремонт сколов / царапин',
        links: [
          {
            name: 'Эмаль по коду цвета автомобиля',
            path: PathRoutes.HOME,
          },
          {
            name: 'Акриловый лак',
            path: PathRoutes.HOME,
          },
          {
            name: 'Акриловый грунт',
            path: PathRoutes.HOME,
          },
        ],
      },
      {
        title: 'RAL, RAL design',
        links: [
          {
            name: 'Цвета из каталога RAL',
            path: PathRoutes.HOME,
          },
          {
            name: 'Цвета из каталога RAL design',
            path: PathRoutes.HOME,
          },
          {
            name: 'Эмали еще что нибудь',
            path: PathRoutes.HOME,
          },
        ],
      },
    ],
  },
  {
    name: 'Баллончики',
    icon: 'fal fa-spray-can',
    items: [
      {
        title: 'Эмали',
        links: [
          {
            name: 'Эмаль по коду цвета автомобиля',
            path: PathRoutes.HOME,
          },
          {
            name: 'Акриловый лак',
            path: PathRoutes.HOME,
          },
          {
            name: 'Акриловый грунт',
            path: PathRoutes.HOME,
          },
          {
            name: 'Преобразователь ржавичны',
            path: PathRoutes.HOME,
          },
        ],
      },
      {
        title: 'Ral, RAL design',
        links: [
          {
            name: 'Цвета из каталога RAL',
            path: PathRoutes.HOME,
          },
          {
            name: 'Цвета из каталога RAL design',
            path: PathRoutes.HOME,
          },
          {
            name: 'Эмали еще что нибудь',
            path: PathRoutes.HOME,
          },
        ],
      },
    ],
  },
  {
    name: 'Эмаль по коду',
    icon: 'fal fa-fill-drip',
    items: [
      {
        title: 'Эмали',
        links: [
          {
            name: 'Эмаль по коду цвета автомобиля',
            path: PathRoutes.HOME,
          },
          {
            name: 'Акриловые эмали',
            path: PathRoutes.HOME,
          },
          {
            name: 'Полиуретановые эмали эмали',
            path: PathRoutes.HOME,
          },
          {
            name: 'Промышленное PUR',
            path: PathRoutes.HOME,
          },
        ],
      },
      {
        title: 'Ral, RAL design',
        links: [
          {
            name: 'Цвета из каталога RAL',
            path: PathRoutes.HOME,
          },
          {
            name: 'Цвета из каталога RAL design',
            path: PathRoutes.HOME,
          },
          {
            name: 'Эмали еще что нибудь',
            path: PathRoutes.HOME,
          },
        ],
      },
    ],
  },
  {
    name: 'Комплекты / Готовые наборы',
    icon: 'fal fa-box-alt',
    items: [
      {
        title: 'Ремонт сколов / царапин',
        links: [
          {
            name: 'Комплекты кисточек',
            path: PathRoutes.HOME,
          },
          {
            name: 'Комплекты маркеров',
            path: PathRoutes.HOME,
          },
          {
            name: 'Комплекты баллончиков',
            path: PathRoutes.HOME,
          },
          {
            name: 'Собери свой набор',
            path: PathRoutes.HOME,
          },
        ],
      },
      {
        title: 'Комлпекты',
        links: [
          {
            name: 'Набор баллончиков RAL',
            path: PathRoutes.HOME,
          },
          {
            name: 'Набор баллончиков RAL design',
            path: PathRoutes.HOME,
          },
          {
            name: 'Набор баллончиков PUR',
            path: PathRoutes.HOME,
          },
        ],
      },
    ],
  },
  {
    name: 'Расходные материалы',
    icon: 'fal fa-toolbox',
    items: [
      {
        title: 'Расходка',
        links: [
          {
            name: 'Малярная лента',
            path: PathRoutes.HOME,
          },
          {
            name: 'Абразивные материалы',
            path: PathRoutes.HOME,
          },
          {
            name: 'Салфетки',
            path: PathRoutes.HOME,
          },
          {
            name: 'Растворители',
            path: PathRoutes.HOME,
          },
          {
            name: 'Разное',
            path: PathRoutes.HOME,
          },
        ],
      },
      {
        title: 'Защита',
        links: [
          {
            name: 'Защитные маски',
            path: PathRoutes.HOME,
          },
          {
            name: 'Малярные перчатки',
            path: PathRoutes.HOME,
          },
          {
            name: 'Комбинезоны',
            path: PathRoutes.HOME,
          },
        ],
      },
    ],
  },
];
