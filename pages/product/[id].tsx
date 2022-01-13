import { NextPage } from 'next';
import { MainLayout, ProductCardFooter, ProductOptions } from '@components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import s from '@s/pages/index.module.scss';

const Product: NextPage = () => {
  const router = useRouter();
  const [activeImg, setActiveImg] = useState(0);

  const linksArr = [
    'https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB',
    'https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg',
    'https://media.istockphoto.com/photos/paint-can-picture-id463906091?k=20&m=463906091&s=612x612&w=0&h=TDJ27IMYGL16OaNDB37ABuEwxTzooIaMMP72ovZYXEE=',
  ];

  return (
    <MainLayout description="Товар" title="Товар" keywords={['Товар', 'noname']}>
      <div className={s.product}>
        <div className={s.width}>
          <h1 className={s.title}>Штрих-корректор {router.query.id}</h1>
          <div className={s.productMain}>
            <div className={s.image}>
              <div className={s.moreImg}>
                {linksArr.map((link, i) => (
                  <div
                    onClick={() => setActiveImg(i)}
                    key={link}
                    className={i === activeImg ? s.moreImgItem + ' ' + s.active : s.moreImgItem}
                  >
                    <img src={link} alt="img" />
                  </div>
                ))}
              </div>
              <div className={s.img}>
                <img src={linksArr[activeImg]} alt="lol" />
              </div>
            </div>
            <div className={s.text}>
              <ProductOptions />
            </div>
          </div>
          <div className={s.productFooter}>
            <div className={s.description}>
              <h3>Штрих-корректор с эмалью по коду цвета автомобиля</h3>
              <div className={s.description}>
                Самое лучшее описание карточки товара, если ты хочешь стать ниндзя необходимо
                тренировать бросок сюрикена 24 часа в сутки Самое лучшее описание карточки товара,
                если ты хочешь стать ниндзя необходимо тренировать бросок сюрикена 24 часа в сутки
              </div>
              <ProductCardFooter />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
