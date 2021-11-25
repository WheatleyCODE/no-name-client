import { FC } from 'react';
import s from '@s/components/index.module.scss';

// interface ProsuctSliderProps {}

export const ProductSlider: FC = () => {
  return (
    <div className={s.productSlider}>
      <div className={s.slider}>
        <div className={s.blockLeft}>
          <div className={s.circle}></div>
          <div className={s.name}>Расходные материалы</div>
        </div>
        <div className={s.block}>
          <div className={s.circle}></div>
          <div className={s.name}>Кисточки для подкраски сколов</div>
        </div>
        <div className={s.block}>
          <div className={s.circle}></div>
          <div className={s.name}>Баллончики</div>
        </div>
        <div className={s.block}>
          <div className={s.circle}></div>
          <div className={s.name}>Эмаль по коду</div>
        </div>
        <div className={s.block}>
          <div className={s.circle}></div>
          <div className={s.name}>Комплекты для ремонта сколов</div>
        </div>
        <div className={s.blockRight}>
          <div className={s.circle}></div>
          <div className={s.name}>Маркеры для подкраски</div>
        </div>
      </div>
      <div className={s.shadow}>
        <div className={s.left}>
          <i className="fas fa-chevron-left" />
        </div>
        <div className={s.right}>
          <i className="fas fa-chevron-right" />
        </div>
      </div>
    </div>
  );
};
