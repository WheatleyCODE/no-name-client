import { FC } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '@components';
import { Product } from '@t';
import s from '@s/components/index.module.scss';

SwiperCore.use([Navigation, Pagination]);

interface ProsuctSliderProps {
  isMobile?: boolean;
  isHeight?: boolean;
  products: Product[];
}

export const ProductSlider: FC<ProsuctSliderProps> = (props) => {
  const { products, isMobile = false, isHeight = false } = props;

  return (
    <div className={s.productSlider}>
      <Swiper
        breakpoints={{
          [1057]: {
            slidesPerView: isMobile ? 3 : 4,
          },

          [806]: {
            slidesPerView: isMobile ? 2 : 3,
          },

          [556]: {
            slidesPerView: isMobile ? 1 : 2,
          },
        }}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        touchAngle={30}
        touchRatio={1.2}
        className="products"
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductCard product={product} isMobile={isMobile} isHeight={isHeight} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
