import { FC } from 'react';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

interface ProductCardProps {
  test?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({ test }) => {
  return (
    <div className={s.productCard}>
      {test && (
        <img
          src="https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB"
          alt="rfhnfd"
        />
      )}
      {!test && (
        <img src="https://cultra.ru/images/detailed/16/2682qCj6fhU[1]_jp8k-2n.jpg" alt="rf" />
      )}
      <div className={s.name}>Супер длинное название баллончика эвер</div>
      <div className={s.buy}>
        <div className={s.price}>5799 ₽</div>
        <div className={s.buyButton}>
          <Button className={s.orangePull}>Купить</Button>
        </div>
      </div>
    </div>
  );
};