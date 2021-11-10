import { FC } from 'react';
import s from '@s/components/index.module.scss';

export const Logo: FC = () => {
  return (
    <div className={s.logoContainer}>
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwnjzr_0RsFKf0hsffXFpijrtAXbAtXc9qSSaQ6HKvw=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
      <h2>noname</h2>
    </div>
  );
};
