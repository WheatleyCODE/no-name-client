import { FC } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { imgSlides } from 'consts';
import s from '@s/components/index.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

export const ImgSlider: FC = () => {
  return (
    <div className={s.imgSlider}>
      <Swiper
        height={300}
        spaceBetween={30}
        navigation={true}
        slidesPerView={1}
        initialSlide={2}
        touchAngle={30}
        touchRatio={1.2}
        loop
        pagination={{
          clickable: true,
        }}
        className="images"
      >
        {imgSlides.map((img) => (
          <SwiperSlide key={img.src}>
            <img alt={img.name} src={img.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
