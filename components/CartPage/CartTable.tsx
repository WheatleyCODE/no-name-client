import { FC } from 'react';
import { CartTableItem } from '@components';
import { transformPrice } from 'utils';
import s from '@s/components/index.module.scss';

interface CartTableProps {}

export const CartTable: FC<CartTableProps> = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className={s.cartTable}>
      <div className={s.tableHead}>
        <div className={s.img}></div>
        <div className={s.title}>Название</div>
        <div className={s.price}>Цена</div>
        <div className={s.count}>Кол-во</div>
        <div className={s.sum}>Сумма</div>
      </div>
      {data.map((el) => (
        <CartTableItem key={el} />
      ))}
      <div className={s.tableFooter}>
        <div className={s.img}></div>
        <div className={s.title}></div>
        <div className={s.price}></div>
        <div className={s.count}>
          <span>Кол-во</span>
        </div>
        <div className={s.sum}>
          <span>Итого</span>
        </div>
      </div>
      <div className={s.tableFooter}>
        <div className={s.img}></div>
        <div className={s.title}></div>
        <div className={s.price}></div>
        <div className={s.count}>
          <span>60</span>
        </div>
        <div className={s.sum}>
          <span>{transformPrice(20000)}</span>
        </div>
      </div>
    </div>
  );
};
