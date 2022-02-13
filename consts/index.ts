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

export const carBrands = [
  {
    brandName: 'Acura',
    numbers: [15, 22],
    tableURL: null,
  },
  {
    brandName: 'Alfa Romeo',
    numbers: [5, 8, 14, 17, 18],
    tableURL: null,
  },
  {
    brandName: 'Audi',
    numbers: [14, 17, 18],
    tableURL: null,
  },
  {
    brandName: 'BMW',
    numbers: [2, 3, 4, 7, 8],
    tableURL: null,
  },
  {
    brandName: 'Citroen',
    numbers: [2, 3, 4, 7, 8, 10],
    tableURL: null,
  },
  {
    brandName: 'Fiat',
    numbers: [4, 5, 14, 18],
    tableURL: null,
  },
  {
    brandName: 'Ford EUR',
    numbers: [2, 3, 4, 7, 8, 10, 15, 17, 18, 22],
    tableURL: null,
  },
  {
    brandName: 'Ford USA',
    numbers: [15],
    tableURL: null,
  },
  {
    brandName: 'GAZ (Volga)',
    numbers: [18],
    tableURL: null,
  },
  {
    brandName: ' GM',
    numbers: [2, 7, 10, 12],
    tableURL: null,
  },
  {
    brandName: 'GM USA',
    numbers: [16, 18, 19, 20, 21],
    tableURL: null,
  },
  {
    brandName: 'Honda',
    numbers: [15, 22],
    tableURL: null,
  },
  {
    brandName: 'Hyundai',
    numbers: [2, 7, 10, 15],
    tableURL: null,
  },
  {
    brandName: 'Infiniti',
    numbers: [7, 10],
    tableURL: null,
  },
  {
    brandName: 'Innocenti',
    numbers: [22],
    tableURL: null,
  },
  {
    brandName: 'Isuzu',
    numbers: [2, 7, 10, 13, 15],
    tableURL: null,
  },
  {
    brandName: 'Jaguar',
    numbers: [2, 4, 5, 15],
    tableURL: null,
  },
  {
    brandName: 'Kia',
    numbers: [15],
    tableURL: null,
  },
  {
    brandName: 'Lada',
    numbers: [4, 5, 8, 17, 18, 19],
    tableURL: null,
  },
  {
    brandName: 'Lamborghini',
    numbers: [18],
    tableURL: null,
  },
  {
    brandName: 'Land Rover',
    numbers: [2, 3, 7, 10, 15, 17],
    tableURL: null,
  },
  {
    brandName: 'Lexus',
    numbers: [3, 7, 10, 15],
    tableURL: null,
  },
  {
    brandName: 'Mazda',
    numbers: [7, 10, 15],
    tableURL: null,
  },
  {
    brandName: 'Mersedes Benz',
    numbers: [2, 3, 8, 10, 12, 15, 24],
    tableURL: null,
  },
  {
    brandName: 'Mini',
    numbers: [4],
    tableURL: null,
  },
  {
    brandName: 'Mitsubushi',
    numbers: [2, 3, 4, 5, 7, 8, 10, 15],
    tableURL: null,
  },
  {
    brandName: 'Nissan',
    numbers: [2, 4, 7, 10, 15],
    tableURL: null,
  },
  {
    brandName: 'Opel',
    numbers: [2, 3, 4, 7, 8, 10],
    tableURL: null,
  },
  {
    brandName: 'Peugeot',
    numbers: [2, 3, 8],
    tableURL: null,
  },
  {
    brandName: 'Porsche',
    numbers: [2, 7, 8, 10, 12, 15],
    tableURL: null,
  },
  {
    brandName: 'Renault',
    numbers: [3, 7, 8, 10, 15],
    tableURL: null,
  },
  {
    brandName: 'Rover',
    numbers: [2, 3, 5, 7, 10, 15],
    tableURL: null,
  },
  {
    brandName: 'Saab',
    numbers: [3, 8, 10, 15, 17],
    tableURL: null,
  },
  {
    brandName: 'Ssang Yong',
    numbers: [12, 15],
    tableURL: null,
  },
  {
    brandName: 'Seat',
    numbers: [3, 8, 17, 18],
    tableURL: null,
  },
  {
    brandName: 'Skoda',
    numbers: [8, 10, 17],
    tableURL: null,
  },
  {
    brandName: 'Subaru',
    numbers: [2, 7, 8, 10, 11, 15],
    tableURL: null,
  },
  {
    brandName: 'Suzuki',
    numbers: [7, 10, 11, 17, 20, 23, 24],
    tableURL: null,
  },
  {
    brandName: 'Toyota',
    numbers: [3, 4, 7, 8, 10, 11, 12, 15, 17, 23],
    tableURL: null,
  },
  {
    brandName: 'Volkswagen',
    numbers: [1, 2, 3, 7, 8, 14, 17, 18, 19],
    tableURL: null,
  },
  {
    brandName: 'Volvo',
    numbers: [2, 3, 7, 8, 9, 10, 11, 12, 15],
    tableURL: null,
  },
  {
    brandName: 'Все варианты',
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    ],
    tableURL: null,
  },
];

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
