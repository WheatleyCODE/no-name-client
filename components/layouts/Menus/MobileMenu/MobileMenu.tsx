import { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import {
  Portal,
  IconButton,
  Logo,
  Link,
  MobileMenuModal,
  MobileCategories,
  MobileCart,
  MobileLogin,
  MobileSearch,
  Confirm,
  Messengers,
} from '@components';
import { menuItems, PathRoutes, PHONE } from 'consts';
import { transormPhone } from 'utils';
import { useActions, useTypedSelector } from '@hooks';
import s from '@s/components/index.module.scss';

export const MobileMenu: FC = () => {
  const [show, setShow] = useState(false);
  const [showUpprove, setShowUpprove] = useState(false);

  const [showCategories, setShowCategories] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const mobileModals = [
    {
      value: showCategories,
      Component: <MobileCategories onCloseHandler={() => setShowCategories(false)} />,
    },
    {
      value: showCart,
      Component: <MobileCart onCloseHandler={() => setShowCart(false)} />,
    },
    {
      value: showLogin,
      Component: <MobileLogin onCloseHandler={() => setShowLogin(false)} />,
    },
    {
      value: showSearch,
      Component: <MobileSearch onCloseHandler={() => setShowCategories(false)} />,
    },
  ];

  const { isAuth } = useTypedSelector((state) => state.user);
  const { logoutAC } = useActions();
  const router = useRouter();

  const onLogoutHandler = () => {
    logoutAC();
  };

  const changePage = (path: PathRoutes) => {
    setShow(false);
    router.push(path);
  };

  useEffect(() => {
    const $main = document.querySelector<HTMLElement>('main');
    const $footer = document.querySelector<HTMLElement>('footer');
    if (!$main || !$footer) return;

    if (show) {
      $main.style.display = 'none';
      $footer.style.display = 'none';
    } else {
      $main.style.display = 'block';
      $footer.style.display = 'block';
    }
  }, [show]);

  return (
    <div className={s.mobileMenu}>
      <div className={s.bars}>
        <IconButton
          onClickHandler={() => setShow((p) => !p)}
          className={s.big}
          icon="far fa-bars"
        />
      </div>
      <CSSTransition in={show} timeout={200} classNames="modal" mountOnEnter unmountOnExit>
        <Portal>
          <div className={s.menus}>
            <div className={s.header}>
              <div className={s.bars}>
                <IconButton
                  onClickHandler={() => setShow((p) => !p)}
                  className={s.big}
                  icon="fal fa-times"
                />
              </div>
              <div className={s.logo}>
                <Logo noText />
                <Link className={s.logoLink} href={PathRoutes.HOME}>
                  JET COLOR
                </Link>
              </div>
            </div>
            <div className={s.main}>
              <ul>
                {isAuth ? (
                  <li onClick={() => setShowUpprove(true)}>
                    <i className="fal fa-sign-out-alt" />
                    Выйти
                  </li>
                ) : (
                  <li onClick={() => setShowLogin(true)}>
                    <i className="fal fa-sign-in-alt" />
                    Войти
                  </li>
                )}
                <li onClick={() => setShowSearch(true)}>
                  <i className="fal fa-search" />
                  Поиск
                </li>
                <li onClick={() => setShowCategories(true)}>
                  <i className="fal fa-list-ul" />
                  Категории
                </li>
                <div className={s.hr} />
                {menuItems.map((item) => (
                  <li onClick={() => changePage(item.path)} className={s.mainMenu} key={item.name}>
                    <i className={item.icon} />
                    {item.name}
                  </li>
                ))}
                <div className={s.hr} />
                <li onClick={() => setShowCart(true)}>
                  <i className="fal fa-shopping-cart" />
                  Корзина <span className={s.counter}>(3)</span>
                </li>
                <li>
                  <i className="fal fa-swatchbook" />
                  Подбор эмали
                </li>
                <div className={s.hr} />
                <div className={s.socials}>
                  <span className={s.title}>Пишите нам в мессенджерах</span>
                  <Messengers className={s.messengers} width={'45px'} height={'45px'} />
                  <div className={s.phone}>{transormPhone(PHONE)}</div>
                </div>
              </ul>
            </div>
          </div>
        </Portal>
      </CSSTransition>

      <CSSTransition in={showUpprove} timeout={200} classNames="modal" mountOnEnter unmountOnExit>
        <Portal>
          <Confirm onUpprove={onLogoutHandler} onCloseModal={() => setShowUpprove(false)}>
            <h3>Вы действительно хотите выйти?</h3>
          </Confirm>
        </Portal>
      </CSSTransition>

      {mobileModals.map(({ value, Component }, i) => {
        return (
          <CSSTransition
            key={i}
            in={value}
            timeout={200}
            classNames="mobileModal"
            mountOnEnter
            unmountOnExit
          >
            <Portal>
              <MobileMenuModal>{Component}</MobileMenuModal>
            </Portal>
          </CSSTransition>
        );
      })}
    </div>
  );
};
