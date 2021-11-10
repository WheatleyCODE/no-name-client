import { FC } from 'react';
import { useRouter } from 'next/router';
import { PathRoutes } from 'consts';
import { NavLink } from '@components';
import s from '@s/components/index.module.scss';

export const UserBlock: FC = () => {
  return (
    <div className={s.userContainer}>
      <NavLink href={PathRoutes.LOGIN}>
        <span className={s.text}>Войти</span>
        <i className="fal fa-sign-in-alt" />
      </NavLink>
    </div>
  );
};
