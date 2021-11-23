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
        <div className={s.row}>
          <div className={s.categoriesName}>
            <div className={s.name}>
              <span>
                <i className="fal fa-paint-brush" />
                Кисточка
              </span>
              <i className="fal fa-caret-right" />
            </div>
            <div className={s.name}>
              <span>
                <i className="fal fa-highlighter" />
                Маркер
              </span>
              <i className="fal fa-caret-right" />
            </div>
            <div className={s.name}>
              <span>
                <i className="fal fa-spray-can" />
                Баллончики
              </span>
              <i className="fal fa-caret-right" />
            </div>
            <div className={s.name}>
              <span>
                <i className="fal fa-fill-drip" />
                Эмаль по коду
              </span>
              <i className="fal fa-caret-right" />
            </div>
            <div className={s.name}>
              <span>
                <i className="fal fa-box-alt" />
                Комплекты
              </span>
              <i className="fal fa-caret-right" />
            </div>
            <div className={s.name}>
              <span>
                <i className="fal fa-toolbox" />
                Расходные материалы
              </span>
              <i className="fal fa-caret-right" />
            </div>
          </div>
          <div className={s.dontnow}></div>
        </div>
        <div className={s.down}>
          <h4>Скидка 140% на все!</h4>
        </div>
      </div>
    </div>
  );
};
