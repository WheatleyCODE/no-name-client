import { FC, useEffect } from 'react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { categoriesMenuItems, PathRoutes } from 'consts';
import img from 'public/test.jpg';
import { useRouter } from 'next/router';
import s from '@s/components/index.module.scss';

interface CategoriesSliderProps {}

export const CategoriesSlider: FC<CategoriesSliderProps> = () => {
  const router = useRouter();

  useEffect(() => {
    SwiperCore.use([EffectFade, Navigation, Pagination]);
  }, []);

  return (
    <div className={s.categoriesSlider}>
      <Swiper
        breakpoints={{
          [1000]: {
            slidesPerView: 4,
          },
          [830]: {
            slidesPerView: 3.2,
          },
          [730]: {
            spaceBetween: 20,
          },
          [590]: {
            slidesPerView: 2.2,
          },
        }}
        touchAngle={30}
        touchRatio={1.2}
        spaceBetween={10}
        speed={300}
        slidesPerView={1.4}
        className="categories"
      >
        {categoriesMenuItems.map((item) => (
          <SwiperSlide key={item.icon}>
            <div
              onClick={() => {
                router.push(PathRoutes.PRODUCTS);
              }}
              className={s.categoriesSlide}
            >
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
