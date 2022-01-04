import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface SearchResultsProps {}

export const SearchResults: FC<SearchResultsProps> = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={s.searchResults}>
      {items.map((el) => (
        <div key={el} className={s.item}></div>
      ))}
    </div>
  );
};
