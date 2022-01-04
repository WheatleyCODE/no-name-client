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
  QUESTIONS = '/questions',
  PRODUCT = '/product/random',
  PRODUCTS = '/product',
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

export const messengers = [
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
export const MAX_MOBILE_HEIGHT = 436;

export const categoriesMenuItems = [
  {
    name: 'Штрих-корректоры',
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
    name: 'Маркеры',
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
          {
            name: 'МОковый тект',
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
          {
            name: 'МОковый тект',
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
    name: 'Комплекты / Наборы',
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

export const footerMenuItems = [
  {
    title: 'Меню',
    items: ['Главная', 'Отзывы', 'Контакты', 'Код краски'],
  },
  {
    title: 'Вопросы',
    items: ['Часто задаваемые вопросы', 'Как узнать код краски?', 'Спец предложения?'],
  },
  {
    title: 'Статьи',
    items: ['Как удалить сколы', 'Как удалить царапины', 'Мне нужно индустриальное'],
  },
];

export const imgSlides = [
  {
    name: 'Картинка природы',
    src: 'https://shop.pearlbrands.co/faces/wp-content/uploads/sites/2/2020/06/Shiseido-brand-page-banner.jpg',
  },
  {
    name: 'Картинка погоды',
    src: 'https://www.elearningscript.com/wp-content/uploads/2020/04/best-elearning-software.jpg',
  },
  {
    name: 'Картинка пингвина',
    src: 'https://deefineblog.files.wordpress.com/2017/03/cropped-http-mkhmarketing-files_-wordpress-com201302art-of-social-media-5x7.jpg?w=1400&h=400&crop=1',
  },
  {
    name: 'Картинка мандарина',
    src: 'https://diceupblog.files.wordpress.com/2016/11/cropped-banner-e1478367491720.png',
  },
  {
    name: 'Картинка картины',
    src: 'https://jasatamanbali.files.wordpress.com/2018/01/e178d6ef5bc3e8053f6974eb239acfdd.jpg?w=1400&h=400&crop=1',
  },
];

export { data, popularData } from './MockData';
