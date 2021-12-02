import { FC } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '@components';
import s from '@s/components/index.module.scss';

SwiperCore.use([Navigation, Pagination]);

interface ProsuctSliderProps {
  test?: boolean;
}

export const ProductSlider: FC<ProsuctSliderProps> = ({ test = false }) => {
  const product = test ? [1, 2, 3, 4, 5] : [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={s.productSlider}>
      <Swiper
        breakpoints={{
          [1057]: {
            slidesPerView: 4,
          },

          [806]: {
            slidesPerView: 3,
          },

          [556]: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        className="products"
      >
        {product.map((_, i) => (
          <SwiperSlide key={i}>
            <ProductCard test={test} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
