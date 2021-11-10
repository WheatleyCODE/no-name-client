import { FC } from 'react';
import s from '@s/components/index.module.scss';

export const SearchInput: FC = () => {
  return (
    <div className={s.searchInput}>
      <input placeholder="Код цвета, Марка автомобиля, RAL" type="text" />
    </div>
  );
};
