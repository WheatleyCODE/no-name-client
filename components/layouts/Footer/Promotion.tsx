import { FC } from 'react';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

interface PromotionProps {}

export const Promotion: FC<PromotionProps> = () => {
  return (
    <div className={s.promotion}>
      <div className={s.width}>
        <h3 className={s.title}>
          <i className="far fa-badge-percent" />
          <span className={s.desctopText}>Акция! Купи дешевле или дороже.</span>
          <span className={s.mobileText}>Акция!</span>
        </h3>
        <Button className={s.roundWhite}>Купить</Button>
      </div>
    </div>
  );
};
