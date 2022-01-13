import { FC } from 'react';
import { Button } from '@components';
import Select from 'react-select';

import s from '@s/components/index.module.scss';
import { transformPrice } from 'utils';

interface ProductOptionsProps {}

export const ProductOptions: FC<ProductOptionsProps> = () => {
  const options = [
    { value: 'chocolate', label: 'Красный' },
    { value: 'strawberry', label: 'Не красный' },
    { value: 'vanilla', label: 'Синий' },
  ];

  const ml = [
    { value: 'chocolate', label: '50 мл.' },
    { value: 'strawberry', label: '80 мл.' },
    { value: 'vanilla', label: '120 мл.' },
  ];

  return (
    <div className={s.productOptions}>
      <div className={s.optionsBlock}>
        <div className={s.el}>
          <span>Код цвета автомобиля</span>
          <Select placeholder={'Цвет'} options={options} />
        </div>
        <div className={s.el}>
          <span>Выберете объем</span>
          <Select placeholder={'Объем'} options={ml} />
        </div>
        <div className={s.el}>
          <span>Еще</span>
          <Select placeholder={'Объем'} options={ml} />
        </div>
      </div>
      <Button className={s.roundOrangePull}>
        <span className={s.fullText}>
          Добавить в корзину за
          <span className={s.price}>{transformPrice(7777)}</span>
        </span>
        <span className={s.smallText}>
          В корзину за
          <span className={s.price}>{transformPrice(7777)}</span>
        </span>
      </Button>
    </div>
  );
};
