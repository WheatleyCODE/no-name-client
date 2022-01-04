import { FC } from 'react';
import { categoriesMenuItems } from 'consts';
import { animateScroll } from 'react-scroll';
import s from '@s/components/index.module.scss';

interface ProductMenuProps {
  activeCategories: number;
  setActiveCategories: (num: number) => void;
}

export const ProductMenu: FC<ProductMenuProps> = ({ activeCategories, setActiveCategories }) => {
  const onCLickHandler = (num: number) => {
    setActiveCategories(num);
    animateScroll.scrollToTop();
  };

  return (
    <div className={s.productMenu}>
      <div>
        <ul className={s.ul}>
          {categoriesMenuItems.map((el, i) => (
            <li
              className={i === activeCategories ? s.active : ''}
              onClick={() => onCLickHandler(i)}
              key={el.name}
            >
              <i className={el.icon}></i>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
