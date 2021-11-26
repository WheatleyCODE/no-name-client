import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { Search } from './Search';

interface MobileSearchProps {}

export const MobileSearch: FC<MobileSearchProps> = () => {
  return (
    <div className={s.mobileSearch}>
      <h2>MobileSearchProps</h2>
      <Search />
    </div>
  );
};
