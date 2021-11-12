import { LoginForm, Logo, Link, HeadTag } from '@components';
import { NextPage } from 'next';
import { PathRoutes } from 'consts';
import s from '@s/pages/index.module.scss';

const Registration: NextPage = () => {
  return (
    <>
      <HeadTag
        description="Регистрация на сайте noname"
        title="Регистрация"
        keywords={['Регистрация', 'noname']}
      />
      <div className={s.registration}>
        <div className={s.sell}>
          <div className={s.logo}>
            <div className={s.list}>
              <div className={s.logoImg}>
                <Logo noText />
                <Link href={PathRoutes.HOME}>
                  <h2>JET COLOR</h2>
                </Link>
              </div>
              <ul>
                <li>
                  <i className="fad fa-chalkboard-teacher" />
                  <span>Отслеживайте статус заказа</span>
                </li>
                <li>
                  <i className="fad fa-badge-dollar" />
                  <span>Накапливайте бонусы</span>
                </li>
                <li>
                  <i className="fad fa-gift-card" />
                  <span>Спецпредложения для Дизайнеров</span>
                </li>
                <li>
                  <i className="fad fa-comment-smile" />
                  <span>Оставляйте отзывы</span>
                </li>
              </ul>
            </div>
            {/* <div className={s.wave}>
          </div> */}
          </div>
        </div>
        <div className={s.auth}>
          <div className={s.homeLink}>
            <Link href={PathRoutes.HOME}>
              <i className="fas fa-long-arrow-left" />
              <span>Главная</span>
            </Link>
          </div>
          <div className={s.form}>
            <LoginForm reg />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
