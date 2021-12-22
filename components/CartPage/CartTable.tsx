import { FC } from 'react';
import { CartTableItem } from '@components';
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
        <div className={s.count}>Кол-во</div>
        <div className={s.sum}>Итого</div>
      </div>
      <div className={s.tableFooter}>
        <div className={s.img}></div>
        <div className={s.title}></div>
        <div className={s.price}></div>
        <div className={s.count}>60</div>
        <div className={s.sum}>21000</div>
      </div>
    </div>
  );
};
