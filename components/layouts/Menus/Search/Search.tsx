import { FC, useState } from 'react';
import { SearchInput, IconButton } from '@components/UI';
import s from '@s/components/index.module.scss';

export const Search: FC = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className={s.search}>
      <SearchInput />
      <IconButton
        onClickHandler={() => setSearch((prev) => !prev)}
        icon={search ? 'far fa-spinner-third rotation' : 'far fa-search'}
      />
    </div>
  );
};
