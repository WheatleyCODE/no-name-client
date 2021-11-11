import { LoginForm, Logo, Link } from '@components';
import { NextPage } from 'next';
import { PathRoutes } from 'consts';
import s from '@s/pages/index.module.scss';

const Registration: NextPage = () => {
  return (
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
                Отслеживайте статус заказа
              </li>
              <li>
                <i className="fad fa-badge-dollar" />
                Накапливайте бонусы
              </li>
              <li>
                <i className="fad fa-comment-smile" />
                Оставляйте отзывы
              </li>
            </ul>
          </div>
          <div className={s.wave}>
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 600"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 ease-in-out delay-150"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="5%" stopColor="rgb(47, 90, 247)"></stop>
                  <stop offset="95%" stopColor="rgb(255, 105, 0)"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,600 C 0,600 0,200 0,200 C 80.17451047749913,195.70594297492272 160.34902095499825,191.4118859498454 220,194 C 279.65097904500175,196.5881140501546 318.77842665750603,206.05839917554104 376,190 C 433.22157334249397,173.94160082445896 508.5372724149777,132.35451734799037 595,144 C 681.4627275850223,155.64548265200963 779.0724836825834,220.52353143249744 849,221 C 918.9275163174166,221.47646856750256 961.1727928546891,157.55135692201992 1018,148 C 1074.827207145311,138.44864307798008 1146.2363448986603,183.27104087942286 1219,201 C 1291.7636551013397,218.72895912057714 1365.8818275506699,209.36447956028857 1440,200 C 1440,200 1440,600 1440,600 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                className="transition-all duration-300 ease-in-out delay-150 path-0"
              ></path>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="5%" stopColor="#002bdcff"></stop>
                  <stop offset="95%" stopColor="#32ded4ff"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,600 C 0,600 0,400 0,400 C 61.33356234970802,392.15733424939884 122.66712469941604,384.3146684987977 188,364 C 253.33287530058396,343.6853315012023 322.6650635520439,310.8986602542082 392,335 C 461.3349364479561,359.1013397457918 530.6726210924082,440.09069048436953 610,440 C 689.3273789075918,439.90930951563047 778.6444520783236,358.7385778083134 852,332 C 925.3555479216764,305.2614221916866 982.7495705942974,332.9549982823772 1044,349 C 1105.2504294057026,365.0450017176228 1170.3572655444864,369.4414290621779 1237,376 C 1303.6427344555136,382.5585709378221 1371.8213672277568,391.27928546891104 1440,400 C 1440,400 1440,600 1440,600 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                className="transition-all duration-300 ease-in-out delay-150 path-1"
              ></path>
            </svg>
          </div>
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
  );
};

export default Registration;
