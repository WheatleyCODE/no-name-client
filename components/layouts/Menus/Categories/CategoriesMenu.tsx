import { FC, useState } from 'react';
import { categoriesMenuItems } from 'consts';
import s from '@s/components/index.module.scss';

interface CategoriesMenuProps {
  closeMenu: () => void;
}

export const CategoriesMenu: FC<CategoriesMenuProps> = ({ closeMenu }) => {
  const [activeCatalogIndx, setActiveCatalogInx] = useState(0);

  const onCloseMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    closeMenu();
  };

  return (
    <div onClick={onCloseMenuHandler} className={s.categoriesMenu}>
      <div onClick={(e) => e.stopPropagation()} className={s.categoriesMenuCont}>
        <div className={s.row}>
          <div className={s.categoriesName}>
            {categoriesMenuItems.map((itm, indx) => (
              <div
                key={itm.icon}
                onMouseOver={() => setActiveCatalogInx(indx)}
                className={indx === activeCatalogIndx ? s.name + ' ' + s.active : s.name}
              >
                <span>
                  <i className={itm.icon} />
                  {itm.name}
                </span>
                <i className="fal fa-caret-right" />
              </div>
            ))}
          </div>
          <div className={s.more}>
            {categoriesMenuItems.map((el, ind) => {
              if (ind === activeCatalogIndx) {
                return el.items?.map((item) => (
                  <div key={item.title} className={s.moreBlock}>
                    <h6>{item.title}</h6>
                    <ul>
                      {item.links.map((link) => (
                        <li key={link.name}>{link.name}</li>
                      ))}
                    </ul>
                  </div>
                ));
              }
            })}
          </div>
        </div>
        <div className={s.sale}>
          <h4>Сконфигурируй комплект и получи скидку до 32%</h4>
        </div>
      </div>
    </div>
  );
};
