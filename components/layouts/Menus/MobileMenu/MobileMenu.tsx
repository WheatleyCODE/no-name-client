import { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import viber from 'public/viber.svg';
import telegram from 'public/telegram.svg';
import whatsapp from 'public/whatsapp.svg';
import { Portal, IconButton, Logo, Link, MobileMenuModal } from '@components';
import { menuItems, messagers, PathRoutes, PHONE } from 'consts';
import { transormPhone } from 'utils';
import s from '@s/components/index.module.scss';

export const MobileMenu: FC = () => {
  const [show, setShow] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const socials = {
    viber,
    telegram,
    whatsapp,
  };

  useEffect(() => {
    const $main = document.querySelector<HTMLElement>('main');
    if (!$main) return;

    if (show) {
      $main.style.display = 'none';
      document.body.style.backgroundColor = 'rgb(35, 35, 35)';
    } else {
      $main.style.display = 'block';
      document.body.style.backgroundColor = '#fff';
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
                <li onClick={() => setShowLogin(true)}>
                  <i className="fal fa-sign-in-alt" />
                  Войти
                </li>
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
                  <li onClick={() => setShow(false)} className={s.mainMenu} key={item.name}>
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
                        <Image width={'45px'} height={'45px'} src={socials[el.img]} alt={el.name} />
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
            <div className={s.header}>
              <div className={s.bars}>
                <IconButton
                  onClickHandler={() => setShowCategories((p) => !p)}
                  className={s.big}
                  icon="fas fa-chevron-left"
                />
              </div>
            </div>
            Категории
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
            <div className={s.header}>
              <div className={s.bars}>
                <IconButton
                  onClickHandler={() => setShowCart((p) => !p)}
                  className={s.big}
                  icon="fas fa-chevron-left"
                />
              </div>
            </div>
            Корзина
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
            <div className={s.header}>
              <div className={s.bars}>
                <IconButton
                  onClickHandler={() => setShowLogin((p) => !p)}
                  className={s.big}
                  icon="fas fa-chevron-left"
                />
              </div>
            </div>
            Войти
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
                  icon="fas fa-chevron-left"
                />
              </div>
            </div>
            Поиск
          </MobileMenuModal>
        </Portal>
      </CSSTransition>
    </div>
  );
};
