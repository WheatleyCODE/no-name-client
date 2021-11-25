import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface ImgSliderProps {}

export const ImgSlider: FC<ImgSliderProps> = () => {
  return (
    <div className={s.test}>
      <div className={s.right}>
        <i className="fas fa-chevron-right" />
      </div>
      <div className={s.left}>
        <i className="fas fa-chevron-left" />
      </div>
      <div className={s.imgSlider}>
        <h2>Убрать сколы и сэкономить?</h2>
        <h1>Возможно.</h1>
      </div>
      <div className={s.steps}>
        <div className={s.step}>
          <div className={s.circle}>
            <i className="fas fa-circle" />
          </div>
        </div>
        <div className={s.step}>
          <div className={s.circle}>
            <i className="fas fa-circle" />
          </div>
        </div>
        <div className={s.step}>
          <div className={s.circle}>
            <i className="fas fa-circle" />
          </div>
        </div>
      </div>
    </div>
  );
};
