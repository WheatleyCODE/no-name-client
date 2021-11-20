import { FC } from 'react';
import { Logo, Link } from '@components';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

interface PageClosesProps {
  text: string;
}

export const PageCloses: FC<PageClosesProps> = ({ text }) => {
  return (
    <div className={s.pageCloses}>
      <div className={s.logoContainer}>
        <Logo />
      </div>
      <div>
        <h2>{text}</h2>
        <div className={s.linkBlock}>
          <Link href={PathRoutes.HOME}>
            <span>
              <i className="far fa-long-arrow-left" />
              На главную
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
