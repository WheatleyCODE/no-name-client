import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button, CategoriesMenu } from '@components';
import s from '@s/components/index.module.scss';

interface CategoriesProps {
  noText?: boolean;
}

export const Categories: FC<CategoriesProps> = ({ noText = false }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={s.categories}>
      <Button onClickHandler={() => setShowMenu((p) => !p)} className={s.blue}>
        <div style={{ width: noText ? '20px' : '137.5px' }}>
          <CSSTransition
            in={!noText}
            timeout={200}
            classNames={'categories'}
            mountOnEnter
            unmountOnExit
          >
            <span className={s.text}>Категории</span>
          </CSSTransition>
          <span>
            <CSSTransition
              mountOnEnter
              unmountOnExit
              in={showMenu}
              timeout={150}
              classNames={'ctgr'}
            >
              <i style={{ fontSize: '1.5rem' }} className="fal fa-times" />
            </CSSTransition>
            <CSSTransition
              mountOnEnter
              unmountOnExit
              in={!showMenu}
              timeout={150}
              classNames={'ctgr'}
            >
              <i style={{ position: 'absolute' }} className="far fa-list-ul" />
            </CSSTransition>
          </span>
        </div>
      </Button>
      <CSSTransition mountOnEnter unmountOnExit in={showMenu} timeout={150} classNames={'ctgr'}>
        <CategoriesMenu closeMenu={() => setShowMenu(false)} />
      </CSSTransition>
    </div>
  );
};
