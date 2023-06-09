import { FC } from 'react';
import { Button, Link } from '@components';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

interface MiniCartProps {
  onMouseHandlers?: {
    onMouseEnter: () => void;
    onMouseOver: () => void;
    onMouseLeave: () => void;
  };
  desctop?: boolean;
}

export const MiniCart: FC<MiniCartProps> = ({ onMouseHandlers, desctop = false }) => {
  return (
    <div {...onMouseHandlers} className={desctop ? s.miniCart + ' ' + s.desctop : s.miniCart}>
      <div className={s.cartMain}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9].map((el) => (
          <div className={s.mainItem} key={el}></div>
        ))}
      </div>
      <div className={s.cartLink}>
        <Link href={PathRoutes.CART}>Перейти в Корзину</Link>
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
