import { FC, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from '@s/components/index.module.scss';

// interface ImgSliderProps {}

export const ImgSlider: FC = () => {
  useEffect(() => {
    SwiperCore.use([Navigation, Pagination]);

    const swiper = new SwiperCore('.swiper', {
      speed: 400,
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        type: 'bullets',
        clickable: true,
      },
      grabCursor: true,
      loop: true,
    });
  }, []);

  return (
    <div className={s.imgSlider}>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              alt="Картинка"
              src="https://www.millermotorcars.com/template/images/model_pages/bentley/continental_gt_v8_s_convertible/video1.jpg"
            />
          </div>
          <div className="swiper-slide">
            <img
              alt="Картинка"
              src="http://www.gamfachschulen.ch/wp-content/uploads/2017/10/Luxury-Car8.jpg"
            />
          </div>
          <div className="swiper-slide">
            <img
              alt="Картинка"
              src="https://di-uploads-pod1.dealerinspire.com/rayskillmanford/uploads/2019/04/Ford-Ranger-Martinsville-IN.png"
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev">
          <i className={`${s.icon} fal fa-chevron-left`} />
        </div>
        <div className="swiper-button-next">
          <i className={`${s.icon} fal fa-chevron-right`} />
        </div>

        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
};
