import { ProductType } from '@t';

// ! data type: ProductType.PRODUCT, ProductType.SET, ProductType.DEFAULT

export const data = [
  {
    title: 'Штрих-корректоры',
    isSlider: false,
    products: [
      {
        type: ProductType.PRODUCT,
        name: 'Штрих-корректор c эмалью по коду цвета автомобиля',
        description:
          'Эмаль по коду цвета автомобиля во флаконе с кисточкой, предназначенная для ремонта сколов и царапин',
        imgUrl:
          'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
        productUrl: 'corrector',
        price: 370,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Штрих-корректор с лаком',
        description:
          'Акриловый лак во флаконе с кистокой, предназначенный для ремонта сколов и царапин',
        imgUrl:
          'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
        productUrl: 'corrector',
        price: 250,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Штрих-корректор с грунтом',
        description:
          'Акриловый грунт во флаконе с кистокой, предназначенный для грунтования металла перед покраской',
        imgUrl:
          'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
        productUrl: 'corrector',
        price: 210,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Грунт-преобразователь ржавчины',
        description:
          'Грунт-преобразователь ржавчины во флаконе с кисточкой предназначенный для нейтрализации ржавчины',
        imgUrl:
          'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
        productUrl: 'corrector',
        price: 510,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Штрих-корректор c эмалью по каталогу RAL',
        description:
          'Эмаль любого цвета из каталога RAL, предназначенная для покраски любых поверхностей',
        imgUrl:
          'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
        productUrl: 'corrector',
        price: 370,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Штрих-корректор c эмалью по каталогу RAL DESIGN',
        description:
          'Эмаль любого цвета из каталога RAL DESIGN, предназначенная для покраски любых поверхностей',
        imgUrl:
          'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
        productUrl: 'corrector',
        price: 370,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Штрих-корректор c эмалью по коду цвета автомобиля',
        description:
          'Эмаль по коду цвета автомобиля во флаконе с кисточкой, предназначенная для локального ремонта или подкраски сколов и царапин',
        imgUrl:
          'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
        productUrl: 'corrector',
        price: 370,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Штрих-корректор с лаком',
        description:
          'Акриловый лак во флаконе с кистокой, предназначенный для ремонта сколов и царапин',
        imgUrl:
          'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
        productUrl: 'corrector',
        price: 250,
      },
    ],
  },
  {
    title: 'Маркеры',
    isSlider: true,
    products: [
      {
        type: ProductType.PRODUCT,
        name: 'Маркер c эмалью по коду цвета автомобиля',
        description:
          'Эмаль по коду цвета автомобиля в удобном маркере, предназначенная для ремонта сколов и царапин',
        imgUrl: 'https://kingink.ru/wa-data/public/shop/products/77/02/277/images/494/494.970.jpg',
        productUrl: 'marker',
        price: 310,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Маркер с лаком',
        description:
          'Акриловый лак в удобном маркере, предназначенный для ремонта сколов и царапин',
        imgUrl: 'https://kingink.ru/wa-data/public/shop/products/77/02/277/images/494/494.970.jpg',
        productUrl: 'marker',
        price: 310,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Маркер с грунтом',
        description:
          'Акриловый грунт удобном в маркере, предназначенный для грунтования металла перед покраской',
        imgUrl: 'https://kingink.ru/wa-data/public/shop/products/77/02/277/images/494/494.970.jpg',
        productUrl: 'marker',
        price: 270,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Грунт-преобразователь ржавчины',
        description:
          'Грунт-преобразователь ржавчины в удобном маркере, предназначенный для нейтрализации ржавчины',
        imgUrl: 'https://kingink.ru/wa-data/public/shop/products/77/02/277/images/494/494.970.jpg',
        productUrl: 'marker',
        price: 380,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Маркер c краской по каталогу RAL',
        description:
          'Эмаль любого цвета из каталога RAL в удобном маркере, предназначенная для покраски любых поверхностей',
        imgUrl: 'https://kingink.ru/wa-data/public/shop/products/77/02/277/images/494/494.970.jpg',
        productUrl: 'marker',
        price: 310,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Маркер c эмалью по каталогу RAL DESIGN',
        description:
          'Эмаль любого цвета из каталога RAL DESIGN в удомном маркере, предназначенная для покраски любых поверхностей',
        imgUrl: 'https://kingink.ru/wa-data/public/shop/products/77/02/277/images/494/494.970.jpg',
        productUrl: 'marker',
        price: 310,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Маркер c эмалью по коду цвета автомобиля',
        description:
          'Эмаль по коду цвета автомобиля в удобном маркере, предназначенная для ремонта сколов и царапин',
        imgUrl: 'https://kingink.ru/wa-data/public/shop/products/77/02/277/images/494/494.970.jpg',
        productUrl: 'marker',
        price: 310,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Маркер с лаком',
        description:
          'Акриловый лак в удобном маркере, предназначенный для ремонта сколов и царапин',
        imgUrl: 'https://kingink.ru/wa-data/public/shop/products/77/02/277/images/494/494.970.jpg',
        productUrl: 'marker',
        price: 310,
      },
    ],
  },
  {
    title: 'Баллончики',
    isSlider: false,
    products: [
      {
        type: ProductType.PRODUCT,
        name: 'Баллончик c эмалью по коду цвета автомобиля',
        description:
          'Эмаль по коду цвета автомобиля по коду цвета автомобиля в баллончике, предназначенная для универсального использования',
        imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
        productUrl: 'spray',
        price: 750,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Баллончик с лаком',
        description: 'Акриловый лак баллончике, предназначенный для универсального использования',
        imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
        productUrl: 'spray',
        price: 450,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Баллончик с грунтом',
        description:
          'Акриловый грунт в баллончике, предназначенный для грунтования металла перед покраской',
        imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
        productUrl: 'spray',
        price: 350,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Грунт-преобразователь ржавчины',
        description:
          'Грунт-преобразователь ржавчины в баллончике, предназначенный для нейтрализации ржавчины',
        imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
        productUrl: 'spray',
        price: 550,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Баллончик c краской по каталогу RAL',
        description:
          'Эмаль любого цвета из каталога RAL в баллончике, предназначенная для покраски любых поверхностей',
        imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
        productUrl: 'spray',
        price: 650,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Баллончик c эмалью по каталогу RAL DESIGN',
        description:
          'Эмаль любого цвета из каталога RAL DESIGN в баллончике, предназначенная для покраски любых поверхностей',
        imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
        productUrl: 'spray',
        price: 650,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Баллончик c эмалью по коду цвета автомобиля',
        description:
          'Эмаль по коду цвета автомобиля по коду цвета автомобиля в баллончике, предназначенная для универсального использования',
        imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
        productUrl: 'spray',
        price: 750,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Баллончик с лаком',
        description: 'Акриловый лак баллончике, предназначенный для универсального использования',
        imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
        productUrl: 'spray',
        price: 450,
      },
    ],
  },
  {
    title: 'Эмаль по коду',
    isSlider: false,
    products: [
      {
        type: ProductType.PRODUCT,
        name: 'Эмаль по коду цвета автомобиля',
        description:
          'Эмаль по коду цвета автомобиля, предназначенная для универсального использования',
        imgUrl:
          'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
        productUrl: 'paint',
        price: 300,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Акриловый лак',
        description: 'Акриловый лак, предназначенный для универсального использования',
        imgUrl:
          'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
        productUrl: 'paint',
        price: 270,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Акриловый грунт',
        description: 'Акриловый грунт, предназначенный для грунтования металла перед покраской',
        imgUrl:
          'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
        productUrl: 'paint',
        price: 250,
      },
      {
        type: ProductType.DEFAULT,
        name: 'Грунт-преобразователь ржавчины',
        description: 'Грунт-преобразователь ржавчины, предназначенный для нейтрализации ржавчины',
        imgUrl:
          'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
        productUrl: 'paint',
        price: 380,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Краска по каталогу RAL',
        description:
          'Эмаль любого цвета из каталога RAL, предназначенная для покраски любых поверхностей',
        imgUrl:
          'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
        productUrl: 'paint',
        price: 300,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Краска по каталогу RAL DESIGN',
        description:
          'Эмаль любого цвета из каталога RAL DESIGN, предназначенная для покраски любых поверхностей',
        imgUrl:
          'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
        productUrl: 'paint',
        price: 300,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Эмаль PUR для промышленного использования',
        description:
          'Эмаль любого цвета из каталога RAL DESIGN, RAL, предназначенная для покраски поверхностей промышленного использования',
        imgUrl:
          'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
        productUrl: 'paint',
        price: 300,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Полиуретановые эмали',
        description:
          'Полиуретановая эмаль любого цвета из каталога RAL DESIGN, RAL, предназначенная для покраски любых поверхностей',
        imgUrl:
          'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
        productUrl: 'paint',
        price: 300,
      },
    ],
  },
  {
    title: 'Комплекты / Наборы',
    isSlider: false,
    products: [
      {
        type: ProductType.SET,
        name: 'Небольшой комплект для ремонта сколов и царапин',
        description: 'Комлпект содержащий минимум для самостоятельного ремонта сколов и царапин',
        imgUrl: 'https://main-cdn.goods.ru/big2/hlr-system/61/37/15/55/87/10/600001737679b0.jpeg',
        productUrl: ProductType.SET,
        price: 799,
      },
      {
        type: ProductType.SET,
        name: 'Комплект для ремонта сколов и царапин',
        description:
          'Комлпект содержащий все необходимое для самостоятельного ремонта сколов и царапин',
        imgUrl: 'https://main-cdn.goods.ru/big2/hlr-system/61/37/15/55/87/10/600001737679b0.jpeg',
        productUrl: ProductType.SET,
        price: 1299,
      },
      {
        type: ProductType.SET,
        name: 'Небольшой комплект маркеров для ремонта сколов и царапин',
        description: 'Комлпект содержащий минимум для самостоятельного ремонта сколов и царапин',
        imgUrl: 'https://main-cdn.goods.ru/big2/hlr-system/61/37/15/55/87/10/600001737679b0.jpeg',
        productUrl: ProductType.SET,
        price: 699,
      },
      {
        type: ProductType.SET,
        name: 'Комплект маркеров для ремонта сколов и царапин',
        description:
          'Комлпект содержащий все необходимое для самостоятельного ремонта сколов и царапин',
        imgUrl: 'https://main-cdn.goods.ru/big2/hlr-system/61/37/15/55/87/10/600001737679b0.jpeg',
        productUrl: ProductType.SET,
        price: 1199,
      },
      {
        type: ProductType.SET,
        name: 'Комлпект баллончиков для покраски',
        description: 'Соберите комплект из 2 баллончиков, эмаль на выбор и грунт',
        imgUrl: 'https://main-cdn.goods.ru/big2/hlr-system/61/37/15/55/87/10/600001737679b0.jpeg',
        productUrl: ProductType.SET,
        price: 899,
      },
      {
        type: ProductType.SET,
        name: 'Комплект баллончиков для покраски',
        description: 'Соберите комплект из 3 баллончиков, эмаль на выбор, грунт и лак',
        imgUrl: 'https://main-cdn.goods.ru/big2/hlr-system/61/37/15/55/87/10/600001737679b0.jpeg',
        productUrl: ProductType.SET,
        price: 1199,
      },
      {
        type: ProductType.SET,
        name: 'Комплект из 5 баллончиков',
        description: 'Соберите комплект из 5 любых баллончиков',
        imgUrl: 'https://main-cdn.goods.ru/big2/hlr-system/61/37/15/55/87/10/600001737679b0.jpeg',
        productUrl: ProductType.SET,
        price: 2999,
      },
      {
        type: ProductType.SET,
        name: 'Комплект расходных материалов',
        description: 'Комлпект расходных материалов для локального ремонта сколов',
        imgUrl: 'https://main-cdn.goods.ru/big2/hlr-system/61/37/15/55/87/10/600001737679b0.jpeg',
        productUrl: ProductType.SET,
        price: 2999,
      },
    ],
  },
  {
    title: 'Расходные материалы',
    isSlider: false,
    products: [
      {
        type: ProductType.PRODUCT,
        name: 'Салфетки',
        description: 'Салфетки для обезжиривания, очищения, удаления и нанесения составов',
        imgUrl: 'https://колориставто.рф/wp-content/uploads/2021/04/5850471-1.jpg',
        productUrl: 'materials',
        price: 50,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Абразивные материалы',
        description:
          'Абразивные материалы в кругах, полосках, листах для шлифования, применяемые в атомобильной промышленности',
        imgUrl: 'https://monolit-td.ru/upload/iblock/1aa/25514.jpg',
        productUrl: 'materials',
        price: 39,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Малярная лента',
        description:
          'Малярная лента предназначенная для оклеивания элементов, не оставляет следов на поверхности',
        imgUrl: 'https://avtojet-nn.ru/pictures/product/big/30890_big.jpg',
        productUrl: 'materials',
        price: 69,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Маски / Респираторы',
        description: 'Защита органов дыхания от пыли и аэрозолей',
        imgUrl:
          'https://kraska-market.ru/image/cache/catalog/products/jetapro/jm9912-auto_width_1000.jpg',
        productUrl: 'materials',
        price: 380,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Малярные перчатки',
        description:
          'Нитриловые малярные перчатки, предназначенные для защиты рук от автомобильной химии',
        imgUrl: 'https://avtocolor35.ru/upload/iblock/6b2/6b2360583af75b558f68161ae9636680.jpeg',
        productUrl: 'materials',
        price: 310,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Растворители, разбавители, обезжириватели',
        description: 'Качественные растворители, разбавители и обезжириватели',
        imgUrl: 'https://autokraski36.ru/upload/iblock/f3d/f3d68d0b209998e583fa943c3e908119.jpg',
        productUrl: 'materials',
        price: 180,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Укрывочные материалы',
        description: 'Укрывочная пленка, предназначенная для защиты не окрашиваемого покрытия',
        imgUrl: 'https://artcompas.ru/upload/iblock/3b7/3b7d5e9d83e873c59e3f8af48af83c88.jpg',
        productUrl: 'materials',
        price: 180,
      },
      {
        type: ProductType.PRODUCT,
        name: 'Инструменты для наненсения эмали',
        description: 'Инструменты для ремонта большого голичества сколов',
        imgUrl: 'https://www.at-snab.ru/upload/iblock/124/124e36f807f8c0469092c2688e411313.jpg',
        productUrl: 'materials',
        price: 180,
      },
    ],
  },
];

export const popularData = {
  title: 'Новое и популярное',
  products: [
    {
      type: ProductType.PRODUCT,
      name: 'Штрих-корректор c эмалью по коду цвета автомобиля',
      description:
        'Эмаль по коду цвета автомобиля во флаконе с кисточкой, предназначенная для ремонта сколов и царапин',
      imgUrl:
        'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
      productUrl: 'color',
      price: 370,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Баллончик c эмалью по коду цвета автомобиля',
      // description:
      //   'Эмаль по коду цвета автомобиля в баллончике,
      // предназначенная для универсального использования',
      description: 'лол',
      imgUrl: 'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
      productUrl: 'color',
      price: 310,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Салфетки',
      description: 'Салфетки для обезжиривания, очищения, удаления и нанесения составов',
      imgUrl: 'https://колориставто.рф/wp-content/uploads/2021/04/5850471-1.jpg',
      productUrl: 'materials',
      price: 50,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Абразивные материалы',
      description:
        'Абразивные материалы в кругах, полосках, листах для шлифования, применяемые в атомобильной промышленности',
      imgUrl: 'https://monolit-td.ru/upload/iblock/1aa/25514.jpg',
      productUrl: 'materials',
      price: 39,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Малярная лента',
      description:
        'Малярная лента предназначенная для оклеивания элементов, не оставляет следов на поверхности',
      imgUrl: 'https://avtojet-nn.ru/pictures/product/big/30890_big.jpg',
      productUrl: 'materials',
      price: 69,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Маски / Респираторы',
      description: 'Защита органов дыхания от пыли и аэрозолей',
      imgUrl:
        'https://kraska-market.ru/image/cache/catalog/products/jetapro/jm9912-auto_width_1000.jpg',
      productUrl: 'materials',
      price: 380,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Малярные перчатки',
      description:
        'Нитриловые малярные перчатки, предназначенные для защиты рук от автомобильной химии',
      imgUrl: 'https://avtocolor35.ru/upload/iblock/6b2/6b2360583af75b558f68161ae9636680.jpeg',
      productUrl: 'materials',
      price: 310,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Растворители, разбавители, обезжириватели',
      description: 'Качественные растворители, разбавители и обезжириватели',
      imgUrl: 'https://autokraski36.ru/upload/iblock/f3d/f3d68d0b209998e583fa943c3e908119.jpg',
      productUrl: 'materials',
      price: 180,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Укрывочные материалы',
      description: 'Укрывочная пленка, предназначенная для защиты не окрашиваемого покрытия',
      imgUrl: 'https://artcompas.ru/upload/iblock/3b7/3b7d5e9d83e873c59e3f8af48af83c88.jpg',
      productUrl: 'materials',
      price: 180,
    },
    {
      type: ProductType.PRODUCT,
      name: 'Инструменты для наненсения эмали',
      description: 'Инструменты для ремонта большого голичества сколов',
      imgUrl: 'https://www.at-snab.ru/upload/iblock/124/124e36f807f8c0469092c2688e411313.jpg',
      productUrl: 'materials',
      price: 180,
    },
  ],
};
