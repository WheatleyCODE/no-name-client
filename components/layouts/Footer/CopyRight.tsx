import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { IconButton } from '@components/UI';

interface CopyRightProps {}

export const CopyRight: FC<CopyRightProps> = () => {
  const icons = [
    'far fa-address-book',
    'far fa-address-book',
    'far fa-address-book',
    'far fa-address-book',
  ];
  return (
    <div className={s.copyRight}>
      <ul className={s.menu}>
        <li className={s.menuItm}>JET COLOR</li>
        <li className={s.menuItm}>Информация</li>
        <li className={s.menuItm}>Что-то еще</li>
      </ul>
      <div className={s.socialsButton}>
        {icons.map((icon) => (
          <IconButton className={s.social} key={icon} icon={icon} />
        ))}
      </div>
    </div>
  );
};
