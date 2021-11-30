import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <div className={s.banner}>
      <img
        src="https://sc01.alicdn.com/kf/UTB8c9diGCnEXKJk43Ubq6zLppXae/178192602/UTB8c9diGCnEXKJk43Ubq6zLppXae.jpg"
        alt="Баннер"
      />
    </div>
  );
};
