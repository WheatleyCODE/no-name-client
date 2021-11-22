import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface CategoriesMenuProps {
  closeMenu: () => void;
}

export const CategoriesMenu: FC<CategoriesMenuProps> = ({ closeMenu }) => {
  const onCloseMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    closeMenu();
  };

  return (
    <div onClick={onCloseMenuHandler} className={s.categoriesMenu}>
      <div onClick={(e) => e.stopPropagation()} className={s.categoriesMenuCont}>
        <h5>Кисточка</h5>
        <h5>Маркер</h5>
        <h5>Баллончики</h5>
        <h5>Эмаль по коду</h5>
        <h5>Расходные материалы</h5>
      </div>
    </div>
  );
};
