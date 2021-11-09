import { FC } from 'react';
import { useRouter } from 'next/router';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

export const UserBlock: FC = () => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(PathRoutes.REGISTRATION);
  };

  return (
    <div aria-hidden onClick={onClickHandler} className={s.userContainer}>
      <span>Войти</span>
      <i className="far fa-sign-in-alt" />
    </div>
  );
};
