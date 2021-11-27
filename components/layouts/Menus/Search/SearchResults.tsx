import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface SearchResultsProps {}

export const SearchResults: FC<SearchResultsProps> = () => {
  return (
    <div className={s.searchResults}>
    </div>
  );
};
