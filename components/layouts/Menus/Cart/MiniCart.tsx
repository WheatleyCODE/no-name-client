import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface MiniCartProps {
  onMouseHandlers: {
    onMouseEnter: () => void;
    onMouseOver: () => void;
    onMouseLeave: () => void;
  };
}

export const MiniCart: FC<MiniCartProps> = ({ onMouseHandlers }) => {
  return (
    <div {...onMouseHandlers} className={s.miniCart}>
      <div className={s.cartMain}></div>
      <div className={s.cartFooter}></div>
    </div>
  );
};
