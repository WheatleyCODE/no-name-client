import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { Button, Link } from '@components/UI';
import { PathRoutes } from 'consts';

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
      <div className={s.cartMain}>
        {[1, 2, 3, 4, 5].map((el) => (
          <div className={s.mainItem} key={el}></div>
        ))}
        <div className={s.cartLink}>
          <Link href={PathRoutes.CART}>Перейти в Корзину</Link>
        </div>
      </div>
      <div className={s.cartFooter}>
        <div className={s.buttons}>
          <Button className={s.orange}>Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
};
