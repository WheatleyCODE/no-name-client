import { FC } from 'react';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

export const Cart: FC = () => {
  return (
    <div className={s.cart}>
      <Button className={s.orange}>
        <span>
          Корзина <i className="far fa-shopping-cart" />
        </span>
      </Button>
    </div>
  );
};
