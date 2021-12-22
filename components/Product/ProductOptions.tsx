import { FC } from 'react';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

interface ProductOptionsProps {}

export const ProductOptions: FC<ProductOptionsProps> = () => {
  return (
    <div className={s.productOptions}>
      <div className={s.optionsBlock}>
        <div className={s.el}>
          <h5>Options name 1</h5>
        </div>
        <div className={s.el}>
          <h5>Options name 2</h5>
        </div>
        <div className={s.el}>
          <h5>Options name 3</h5>
        </div>
        <div className={s.el}>
          <h5>Options name 4</h5>
        </div>
      </div>
      <Button className={s.roundOrange}>Добавить в корзиру</Button>
    </div>
  );
};
