import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface CopyRightProps {}

export const CopyRight: FC<CopyRightProps> = () => {
  return (
    <div className={s.copyRight}>
      <ul className={s.menu}>
        <li className={s.menuItm}>JET COLOR</li>
        <li className={s.menuItm}>Информация</li>
        <li className={s.menuItm}>Что-то еще</li>
      </ul>
      <div className={s.socialsButton}>buttons</div>
    </div>
  );
};
