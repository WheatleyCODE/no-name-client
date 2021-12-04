import { FC } from 'react';
import { useRouter } from 'next/router';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

interface LogoProps {
  noText?: boolean;
  onClickHandler?: () => void;
}

export const Logo: FC<LogoProps> = ({ noText = false, onClickHandler }) => {
  const router = useRouter();

  const onClick = () => {
    if (onClickHandler) {
      onClickHandler();
      return;
    }

    router.push(PathRoutes.HOME);
  };

  return (
    <div onClick={onClick} className={s.logoContainer}>
      <img
        src="https://yt3.ggpht.com/ytc/AAUvwnjzr_0RsFKf0hsffXFpijrtAXbAtXc9qSSaQ6HKvw=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
      {!noText && <h3>JET COLOR</h3>}
    </div>
  );
};
