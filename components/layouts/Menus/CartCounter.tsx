import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface CartCounterProps {
  count: number;
}

export const CartCounter: FC<CartCounterProps> = ({ count }) => {
  return <div className={s.cartCounter}>{count}</div>;
};
