import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface CartTableItemProps {}

export const CartTableItem: FC<CartTableItemProps> = () => {
  return (
    <div className={s.cartTableItem}>
      <div className={s.imges}>
        <img
          src="https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB"
          alt="lol"
        />
      </div>
      <div className={s.title}>
        <div className={s.name}>Штрих-корректор</div>
        <div className={s.description}>
          Самый лучший штрих-корректор в мире японии он не победим моем все машины с ним
        </div>
      </div>
      <div className={s.price}>350</div>
      <div className={s.count}>10</div>
      <div className={s.sum}>3500</div>
    </div>
  );
};
