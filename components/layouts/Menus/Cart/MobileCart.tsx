import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { MiniCart } from './MiniCart';
import { IconButton } from '@components/UI';

interface MobileCartProps {
  onCloseHandler: () => void;
}

export const MobileCart: FC<MobileCartProps> = ({ onCloseHandler }) => {
  return (
    <>
      <div className={s.header}>
        <div className={s.bars}>
          <IconButton
            onClickHandler={onCloseHandler}
            className={s.big}
            icon="far fa-chevron-left"
          />
        </div>
        <h3>Корзина</h3>
      </div>
      <div className={s.mobileCart}>
        <MiniCart />
      </div>
    </>
  );
};
