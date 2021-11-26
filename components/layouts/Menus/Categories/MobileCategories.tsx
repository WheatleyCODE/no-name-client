import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { IconButton } from '@components/UI';

interface MobileCategoriesProps {
  onCloseHandler: () => void;
}

export const MobileCategories: FC<MobileCategoriesProps> = ({ onCloseHandler }) => {
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
      </div>
      <div className={s.mobileCategories}>
        <h2>MobileCategoriesProps</h2>
      </div>
    </>
  );
};
