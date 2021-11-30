import { FC } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import s from '@s/components/index.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

export const ImgSlider: FC = () => {
  // ! mark
  return (
    <div className={s.imgSlider}>
      <Swiper
        spaceBetween={30}
        navigation={true}
        slidesPerView={1}
        initialSlide={2}
        loop
        pagination={{
          clickable: true,
        }}
        className="images"
      >
        <SwiperSlide>
          <img
            alt="Картинка"
            src="https://shop.pearlbrands.co/faces/wp-content/uploads/sites/2/2020/06/Shiseido-brand-page-banner.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Картинка"
            src="https://www.elearningscript.com/wp-content/uploads/2020/04/best-elearning-software.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Картинка"
            src="https://deefineblog.files.wordpress.com/2017/03/cropped-http-mkhmarketing-files_-wordpress-com201302art-of-social-media-5x7.jpg?w=1400&h=400&crop=1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Картинка"
            src="https://diceupblog.files.wordpress.com/2016/11/cropped-banner-e1478367491720.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="Картинка"
            src="https://jasatamanbali.files.wordpress.com/2018/01/e178d6ef5bc3e8053f6974eb239acfdd.jpg?w=1400&h=400&crop=1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
