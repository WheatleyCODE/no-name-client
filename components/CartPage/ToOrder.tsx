import { FC } from 'react';
import { transformPrice } from 'utils';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

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
