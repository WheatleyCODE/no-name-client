import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface CategoriesItemProps {
  icon: string;
  name: string;
  onHover: () => void;
}

export const CategoriesItem: FC<CategoriesItemProps> = ({ icon, name, onHover }) => {
  return (
    <div onMouseOver={onHover} className={s.name}>
      <span>
        <i className={icon} />
        {name}
      </span>
      <i className="fal fa-caret-right" />
    </div>
  );
};
