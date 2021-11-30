import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import { Portal, Confirm } from '@components';
import { PathRoutes } from 'consts';
import { useActions, useTypedSelector } from '@hooks';

import s from '@s/components/index.module.scss';

export const UserBlock: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user);
  const { logoutAC } = useActions();
  const [showUpprove, setShowUpprove] = useState(false);
  const router = useRouter();

  const onLogoutHanlder = () => {
    logoutAC();
    router.push(PathRoutes.LOGIN);
  };

  return (
    <>
      {isAuth ? (
        <div
          onClick={() => {
            if (isAuth) setShowUpprove(true);
          }}
        >
          <div className={s.userContainer}>
            <span className={s.text}>Выйти</span>
            <i className="fal fa-sign-out-alt" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            router.push(PathRoutes.LOGIN);
          }}
        >
          <div className={s.userContainer}>
            <span className={s.text}>Войти</span>
            <i className="fal fa-sign-out-alt" />
          </div>
        </div>
      )}
      <CSSTransition in={showUpprove} timeout={200} classNames="modal" mountOnEnter unmountOnExit>
        <Portal>
          <Confirm onUpprove={onLogoutHanlder} onCloseModal={() => setShowUpprove(false)}>
            <h3>Вы действительно хотите выйти?</h3>
          </Confirm>
        </Portal>
      </CSSTransition>
    </>
  );
};
