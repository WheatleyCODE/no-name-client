import { FC } from 'react';
import { PathRoutes } from 'consts';
import { NavLink } from '@components';
import { useActions, useTypedSelector } from '@hooks';
import s from '@s/components/index.module.scss';

export const UserBlock: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user);
  const { logoutAC } = useActions();

  return (
    <div className={s.userContainer}>
      {isAuth ? (
        <NavLink
          onClickHandler={() => {
            logoutAC();
          }}
          href={PathRoutes.LOGIN}
        >
          <span className={s.text}>Выйти</span>
          <i className="fal fa-sign-out-alt" />
        </NavLink>
      ) : (
        <NavLink href={PathRoutes.LOGIN}>
          <span className={s.text}>Войти</span>
          <i className="fal fa-sign-in-alt" />
        </NavLink>
      )}
    </div>
  );
};
