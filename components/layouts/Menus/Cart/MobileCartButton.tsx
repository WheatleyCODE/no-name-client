import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { CartCounter } from './CartCounter';

interface MobileCartButtonProps {
  openCartHandler: () => void;
}

export const MobileCartButton: FC<MobileCartButtonProps> = ({ openCartHandler }) => {
  return (
    <div aria-hidden onClick={openCartHandler} className={s.mobileCartButton}>
      <CartCounter count={10} />
      <i className="fal fa-shopping-cart" />
    </div>
  );
};
