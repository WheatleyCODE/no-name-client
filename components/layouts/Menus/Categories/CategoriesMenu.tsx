import { FC } from 'react';
import { CategoriesItem } from './CategoriesItem';
import s from '@s/components/index.module.scss';

interface CategoriesMenuProps {
  closeMenu: () => void;
}

export const CategoriesMenu: FC<CategoriesMenuProps> = ({ closeMenu }) => {
  const menuItems = [
    {
      name: 'Кисточки для подкраски',
      icon: 'fal fa-paint-brush',
      items: {
        title: 'Подкраска сколов',
      },
    },
    {
      name: 'Маркеры для подкраски',
      icon: 'fal fa-highlighter',
    },
    {
      name: 'Баллончики',
      icon: 'fal fa-spray-can',
    },
    {
      name: 'Эмаль по коду',
      icon: 'fal fa-fill-drip',
    },
    {
      name: 'Комплекты для ремонта сколов',
      icon: 'fal fa-box-alt',
    },
    {
      name: 'Расходные материалы',
      icon: 'fal fa-toolbox',
    },
  ];

  const onCloseMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    closeMenu();
  };

  return (
    <div onClick={onCloseMenuHandler} className={s.categoriesMenu}>
      <div onClick={(e) => e.stopPropagation()} className={s.categoriesMenuCont}>
        <div className={s.row}>
          <div className={s.categoriesName}>
            {menuItems.map((itm, indx) => (
              <CategoriesItem onHover={() => null} key={itm.name} name={itm.name} icon={itm.icon} />
            ))}
          </div>
          <div className={s.more}>
            <div className={s.moreBlock}>
              <h6>Подкраска сколов</h6>
              <ul>
                <li>Эмаль по коду цвета автомобиля</li>
                <li>Акриловый лак</li>
                <li>Акриловый грунт</li>
                <li>Преобразователь ржавчины</li>
              </ul>
            </div>
            <div className={s.moreBlock}>
              <h6>RAL, RAL design</h6>
              <ul>
                <li>Эмали RAL</li>
                <li>Эмали RAL design</li>
                <li>Эмали еще что нибудь</li>
                <li>Моковый текст</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.sale}>
          <h4>Скидка 140% на все!</h4>
        </div>
      </div>
    </div>
  );
};
