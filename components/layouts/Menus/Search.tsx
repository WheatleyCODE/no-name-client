import { FC } from 'react';
import { SearchInput, IconButton } from '@components/UI';
import s from '@s/components/index.module.scss';

export const Search: FC = () => {
  return (
    <div className={s.search}>
      <SearchInput />
      <IconButton icon="fas fa-search" />
    </div>
  );
};
