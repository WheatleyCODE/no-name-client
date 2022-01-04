import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { transformPrice } from 'utils';
import { Button } from '@components/UI';

interface ToOrderProps {}

export const ToOrder: FC<ToOrderProps> = () => {
  return (
    <div className={s.toOrder}>
      <div className={s.right}>
        <Button className={s.bluePull}>Распечатать заказ</Button>
      </div>
      <div className={s.left}>
        <span className={s.price}>{transformPrice(21000)}</span>
        <Button className={s.roundOrange}>
          Оформить заказ <i className="fal fa-money-check"></i>
        </Button>
      </div>
    </div>
  );
};
