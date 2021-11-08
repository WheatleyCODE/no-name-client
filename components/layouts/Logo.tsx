import { FC } from 'react';
import s from '@s/components/index.module.scss';

export const Logo: FC = () => {
  return (
    <div className={s.logoContainer}>
      <img
        src="https://i.pinimg.com/originals/57/84/a6/5784a6f61cdd0a4059867c05b8f639d1.png"
        alt="logo"
      />
    </div>
  );
};
