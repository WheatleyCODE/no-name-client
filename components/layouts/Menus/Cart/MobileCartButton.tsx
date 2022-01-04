import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { CartCounter } from './CartCounter';
import { PathRoutes } from 'consts';

interface MobileCartButtonProps {
  openCartHandler: () => void;
  pathName: string;
}

export const MobileCartButton: FC<MobileCartButtonProps> = ({ openCartHandler, pathName }) => {
  if (pathName === PathRoutes.HOME) {
    return (
      <div aria-hidden onClick={openCartHandler} className={s.mobileCartButton}>
        <CartCounter count={10} />
        <i className="fal fa-shopping-cart" />
      </div>
    );
  }

  return <div />;
};
