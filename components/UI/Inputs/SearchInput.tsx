import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface SearchInputProps {
  value: string;
  onChange: (e: any) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className={s.searchInput}>
      <input
        onChange={(e) => onChange(e)}
        value={value}
        placeholder="Код цвета, Марка автомобиля, RAL"
        type="text"
      />
    </div>
  );
};
