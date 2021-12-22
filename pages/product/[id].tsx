import { NextPage } from 'next';
import { MainLayout, ProductOptions, ProductSlider } from '@components';
import { useRouter } from 'next/router';
import s from '@s/pages/index.module.scss';
import { popularData } from 'consts';

const Product: NextPage = () => {
  const router = useRouter();
  return (
    <MainLayout description="Товар" title="Товар" keywords={['Товар', 'noname']}>
      <div className={s.product}>
        <div className={s.width}>
          <h1 className={s.title}>{router.query.id}</h1>
          <div className={s.productMain}>
            <div className={s.image}>
              <div className={s.img}>
                <img
                  src="https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB"
                  alt="lol"
                />
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
                тренировать бросок сюрикена 24 часа в сутки
              </div>
              <h3>С этим товаром часто покупают</h3>
              <div className={s.slider}>
                <ProductSlider isHeight products={popularData.products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
