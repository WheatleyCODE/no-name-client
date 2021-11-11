import { FC } from 'react';
import { useRouter } from 'next/router';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

interface LogoProps {
  noText?: boolean;
}

export const Logo: FC<LogoProps> = ({ noText = false }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(PathRoutes.HOME)} className={s.logoContainer}>
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwnjzr_0RsFKf0hsffXFpijrtAXbAtXc9qSSaQ6HKvw=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
      {!noText && <h3>JET COLOR</h3>}
    </div>
  );
};
