import { FC } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '@components';
import s from '@s/components/index.module.scss';

SwiperCore.use([Navigation, Pagination]);

interface ProsuctSliderProps {
  test?: boolean;
  tests?: boolean;
}

export const ProductSlider: FC<ProsuctSliderProps> = ({ test = false, tests = false }) => {
  const product = test ? [1, 2, 3, 4, 5] : [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={s.productSlider}>
      <Swiper
        breakpoints={{
          [1057]: {
            slidesPerView: tests ? 3 : 4,
          },

          [806]: {
            slidesPerView: tests ? 2 : 3,
          },

          [556]: {
            slidesPerView: tests ? 1 : 2,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        touchAngle={30}
        touchRatio={1.2}
        className="products"
      >
        {product.map((_, i) => (
          <SwiperSlide key={i}>
            <ProductCard
              img={'https://skladom.ru/images/detailed/282/82f3c59d967e44ee389b38d88ff41696.jpg'}
              mobile={tests}
              key={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
