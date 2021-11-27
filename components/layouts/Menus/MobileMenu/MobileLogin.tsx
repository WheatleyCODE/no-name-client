import { FC } from 'react';
import { LoginForm } from '@components';
import { IconButton } from '@components/UI';
import s from '@s/components/index.module.scss';

interface MobileLoginProps {
  onCloseHandler: () => void;
}

export const MobileLogin: FC<MobileLoginProps> = ({ onCloseHandler }) => {
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
        <h3>Вход на сайт</h3>
      </div>
      <div className={s.mobileLogin}>
        <LoginForm noTitle onCloseHandler={onCloseHandler} />
      </div>
    </>
  );
};
