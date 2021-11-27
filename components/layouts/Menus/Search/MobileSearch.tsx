import { FC } from 'react';
import { IconButton, SearchResults, Search } from '@components';
import s from '@s/components/index.module.scss';

interface MobileSearchProps {
  onCloseHandler: () => void;
}

export const MobileSearch: FC<MobileSearchProps> = ({ onCloseHandler }) => {
  return (
    <>
      <div className={s.header}>
        <div className={s.bars}>
          <IconButton
            onClickHandler={onCloseHandler}
            className={s.big}
            icon="far fa-chevron-left"
          />
        </div>
        <h3>Поиск</h3>
      </div>
      <div className={s.mobileSearch}>
        <Search />
        <div className={s.results}>
          <SearchResults />
        </div>
      </div>
    </>
  );
};
