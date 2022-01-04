import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface ProductCounterProps {
  count: number;
  addFn: () => void;
  subFn: () => void;
}

export const ProductCounter: FC<ProductCounterProps> = ({ count, addFn, subFn }) => {
  return (
    <div className={s.productCounter}>
      <div className={s.add} onClick={addFn}>
        <i className="far fa-plus" />
      </div>
      <div className={s.counter}>{count}</div>
      <div className={s.sub} onClick={subFn}>
        <i className="far fa-minus" />
      </div>
    </div>
  );
};
