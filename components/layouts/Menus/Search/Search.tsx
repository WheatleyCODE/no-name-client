import { FC, useState } from 'react';
import { SearchInput, IconButton } from '@components/UI';
import s from '@s/components/index.module.scss';

export const Search: FC = () => {
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState('');

  const searching = value !== '';

  return (
    <div className={s.search}>
      <SearchInput value={value} onChange={(e) => setValue(e.target.value)} />
      <IconButton
        onClickHandler={() => setSearch((prev) => !prev)}
        icon={searching ? 'far fa-spinner-third rotation' : 'far fa-search'}
      />
      {searching && (
        <div className={s.searchResults}>
          {[1, 2, 4, 6].map((el) => (
            <div className={s.item} key={el}></div>
          ))}
        </div>
      )}
    </div>
  );
};
