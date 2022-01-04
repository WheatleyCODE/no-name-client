import { FC, useState } from 'react';
import s from '@s/components/index.module.scss';
import { Button } from '@components/UI';
import { Modal } from '@components/Modals';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '@components/HOC';
import { categoriesMenuItems } from 'consts';

interface ProductMenuMobileProps {
  activeCategories: number;
  setActiveCategories: (num: number) => void;
}

export const ProductMenuMobile: FC<ProductMenuMobileProps> = (props) => {
  const { activeCategories, setActiveCategories } = props;

  const onClickHandler = (num: number) => {
    setActiveCategories(num);
    setShow(false);
  };

  const [show, setShow] = useState(false);
  return (
    <div className={s.productMenuMobile}>
      <Button onClickHandler={() => setShow(true)} className={s.bluePull}>
        Категории
        <i className="fas fa-list" />
      </Button>
      <CSSTransition in={show} timeout={200} classNames="mobileModal" mountOnEnter unmountOnExit>
        <Portal>
          <Modal onCloseModal={() => setShow((prev) => !prev)} stopScroll>
            <div className={s.productMenuMobileModal}>
              <h2>Категории</h2>
              <ul className={s.ul}>
                {categoriesMenuItems.map((el, i) => (
                  <li
                    className={i === activeCategories ? s.active : ''}
                    onClick={() => onClickHandler(i)}
                    key={el.name}
                  >
                    <i className={el.icon}></i>
                    {el.name}
                  </li>
                ))}
              </ul>
            </div>
          </Modal>
        </Portal>
      </CSSTransition>
    </div>
  );
};
