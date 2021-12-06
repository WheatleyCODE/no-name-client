import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <>
      <div className={s.banner}>
        <img
          src="https://www.stostayer.ru/assets/c26ed96d63a4484da19774f4706e2e68/1400x300/kuzov_wide_1.jpg"
          alt="Баннер"
        />
      </div>
      <div className={s.mobileBanner}>
        <img
          src="https://www.stostayer.ru/assets/c26ed96d63a4484da19774f4706e2e68/1400x300/kuzov_wide_1.jpg"
          alt="Баннер"
        />
      </div>
    </>
  );
};
