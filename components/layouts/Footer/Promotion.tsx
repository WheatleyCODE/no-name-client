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
          Акция!
        </h3>
        <Button className={s.roundWhite}>Купить</Button>
      </div>
    </div>
  );
};
