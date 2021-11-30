import { FC, useEffect } from 'react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { categoriesMenuItems } from 'consts';
import img from 'public/test.jpg';
import s from '@s/components/index.module.scss';

interface CategoriesSliderProps {}

export const CategoriesSlider: FC<CategoriesSliderProps> = () => {
  useEffect(() => {
    SwiperCore.use([EffectFade, Navigation, Pagination]);
  }, []);

  return (
    <div className={s.categoriesSlider}>
      <Swiper
        breakpoints={{
          [830]: {
            slidesPerView: 4,
          },
          [730]: {
            spaceBetween: 20,
          },
          [590]: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        slidesPerView={2}
        className="categories"
      >
        {categoriesMenuItems.map((item) => (
          <SwiperSlide key={item.icon}>
            <div className={s.categoriesSlide}>
              <div className={s.circle}>
                <Image alt="Картинка" src={img} />
              </div>
              <div className={s.text}>
                <span>{item.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
