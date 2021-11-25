import { FC } from 'react';
import s from '@s/components/index.module.scss';

// interface ImgSliderProps {}

export const ImgSlider: FC = () => {
  return (
    <div className={s.test}>
      <div className={s.rightPanel}>
        <div className={s.right}>
          <i className="fas fa-chevron-right" />
        </div>
      </div>
      <div className={s.leftPanel}>
        <div className={s.left}>
          <i className="fas fa-chevron-left" />
        </div>
      </div>
      <div className={s.imgSlider}>
        <div className={s.text}>
          <h2>Убрать сколы и сэкономить?</h2>
          <h1>Возможно.</h1>
        </div>
      </div>
      <div className={s.steps}>
        <div className={s.step}>
          <div className={s.circle}>
            <i className="fas fa-circle" />
          </div>
          <div className={s.circle}>
            <i className="fas fa-circle" />
          </div>
          <div className={s.circle}>
            <i className="fas fa-circle" />
          </div>
        </div>
      </div>
    </div>
  );
};
