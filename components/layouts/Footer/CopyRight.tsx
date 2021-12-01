import { FC } from 'react';
import { IconButton, Link } from '@components';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

interface CopyRightProps {}

export const CopyRight: FC<CopyRightProps> = () => {
  const icons = [
    'far fa-address-book',
    'far fa-address-book',
    'far fa-address-book',
    'far fa-address-book',
  ];
  return (
    <div className={s.copyRight}>
      <ul className={s.footerMenu}>
        <li className={s.menuItm}>
          <Link className={s.linkWhite} href={PathRoutes.HOME}>
            JET COLOR
          </Link>
        </li>
        <li className={s.menuItm}>
          <Link className={s.linkWhite} href={PathRoutes.HOME}>
            Информация
          </Link>
        </li>
        <li className={s.menuItm}>
          <Link className={s.linkWhite} href={PathRoutes.HOME}>
            Что-то еще
          </Link>
        </li>
      </ul>
      <div className={s.socialsButton}>
        {icons.map((icon) => (
          <IconButton className={s.social} key={icon} icon={icon} />
        ))}
      </div>
    </div>
  );
};
