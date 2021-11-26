import { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import viber from 'public/viber.svg';
import telegram from 'public/telegram.svg';
import whatsapp from 'public/whatsapp.svg';
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
} from '@components';
import { menuItems, messagers, PathRoutes, PHONE } from 'consts';
import { transormPhone } from 'utils';
import { useActions, useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import s from '@s/components/index.module.scss';

export const MobileMenu: FC = () => {
  const [show, setShow] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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

  const socials = {
    viber,
    telegram,
    whatsapp,
  };

  useEffect(() => {
    const $main = document.querySelector<HTMLElement>('main');
    if (!$main) return;

    show ? ($main.style.display = 'none') : ($main.style.display = 'block');
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
                  <li onClick={onLogoutHandler}>
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
                  Корзина
                </li>
                <li>
                  <i className="fal fa-swatchbook" />
                  Подбор эмали
                </li>
                <div className={s.hr} />
                <div className={s.socials}>
                  <span>Пишите нам в мессенджерах</span>
                  <div className={s.svgs}>
                    {messagers.map((el) => (
                      <div className={s.svg} key={el.name}>
                        <a target="_blank" href={el.link} rel="noreferrer">
                          <Image
                            width={'45px'}
                            height={'45px'}
                            src={socials[el.img]}
                            alt={el.name}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className={s.phone}>{transormPhone(PHONE)}</div>
                </div>
              </ul>
            </div>
          </div>
        </Portal>
      </CSSTransition>
      <CSSTransition
        in={showCategories}
        timeout={200}
        classNames="mobileModal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <MobileMenuModal>
            <MobileCategories onCloseHandler={() => setShowCategories((p) => !p)} />
          </MobileMenuModal>
        </Portal>
      </CSSTransition>
      <CSSTransition
        in={showCart}
        timeout={200}
        classNames="mobileModal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <MobileMenuModal>
            <MobileCart onCloseHandler={() => setShowCart(false)} />
          </MobileMenuModal>
        </Portal>
      </CSSTransition>
      <CSSTransition
        in={showLogin}
        timeout={200}
        classNames="mobileModal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <MobileMenuModal>
            <MobileLogin onCloseHandler={() => setShowLogin(false)} />
          </MobileMenuModal>
        </Portal>
      </CSSTransition>
      <CSSTransition
        in={showSearch}
        timeout={200}
        classNames="mobileModal"
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <MobileMenuModal>
            <div className={s.header}>
              <div className={s.bars}>
                <IconButton
                  onClickHandler={() => setShowSearch((p) => !p)}
                  className={s.big}
                  icon="far fa-chevron-left"
                />
              </div>
            </div>
            <MobileSearch />
          </MobileMenuModal>
        </Portal>
      </CSSTransition>
    </div>
  );
};
