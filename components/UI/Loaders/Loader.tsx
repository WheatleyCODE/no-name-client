import { FC } from 'react';
import s from '@s/components/index.module.scss';

export const Loader: FC = () => {
  return (
    <div className={s.rollContainer}>
      <div className={s.roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
