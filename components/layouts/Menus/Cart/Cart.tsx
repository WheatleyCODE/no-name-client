import { FC } from 'react';
import { Button, CartCounter } from '@components';
import s from '@s/components/index.module.scss';

export const Cart: FC = () => {
  return (
    <div className={s.cart}>
      <Button className={s.orange}>
        <span>
          <i className="fal fa-shopping-cart" />
        </span>
        <CartCounter count={3} />
      </Button>
    </div>
  );
};
