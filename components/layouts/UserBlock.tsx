import { FC } from 'react';
import { PathRoutes } from 'consts';
import { NavLink } from '@components';
import { useActions, useTypedSelector } from '@hooks';
import s from '@s/components/index.module.scss';

export const UserBlock: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user);
  const { logoutAC } = useActions();

  return (
    <NavLink
      onClickHandler={() => {
        if (isAuth) logoutAC();
      }}
      href={PathRoutes.LOGIN}
    >
      <div className={s.userContainer}>
        {isAuth ? (
          <>
            <span className={s.text}>Выйти</span>
            <i className="fal fa-sign-out-alt" />
          </>
        ) : (
          <>
            <span className={s.text}>Войти</span>
            <i className="fal fa-sign-in-alt" />
          </>
        )}
      </div>
    </NavLink>
  );
};
