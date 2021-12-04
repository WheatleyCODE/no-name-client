import { FC } from 'react';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

interface ProductCardProps {
  mobile?: boolean;
  img?: string;
}

export const ProductCard: FC<ProductCardProps> = ({ mobile = false, img }) => {
  return (
    <div className={mobile ? s.productCardMobile : s.productCard}>
      <div className={s.flex}>
        <div className={s.image}>
          <img src={img} alt="Картинка"/>
        </div>
        <div>
          <div className={s.name}>Штрих-корректор</div>
          <div className={s.description}>
            Краска предназначенная для ремонта сколов и царапин на ЛКМ лялляля
          </div>
        </div>
      </div>
      <div className={s.buy}>
        <div className={s.price}>5799 ₽</div>
        <div className={s.buyButton}>
          <Button className={s.roundOrange}>Купить</Button>
        </div>
      </div>
    </div>
  );
};
