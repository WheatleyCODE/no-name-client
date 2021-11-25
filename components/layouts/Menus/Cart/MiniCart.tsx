import { FC } from 'react';
import { Button, Link } from '@components';
import { PathRoutes } from 'consts';
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
          <Button className={s.orange}>
            Оформить заказ
            <i className="fal fa-money-check" />
          </Button>
        </div>
      </div>
    </div>
  );
};
