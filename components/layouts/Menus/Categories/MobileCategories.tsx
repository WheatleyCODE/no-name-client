import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface MobileCategoriesProps {}

export const MobileCategories: FC<MobileCategoriesProps> = () => {
  return (
    <div className={s.mobileCategories}>
      <h2>MobileCategoriesProps</h2>
    </div>
  );
};
