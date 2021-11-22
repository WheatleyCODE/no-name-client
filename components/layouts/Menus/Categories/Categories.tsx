import { FC } from 'react';
import { Button } from '@components';
import { CSSTransition } from 'react-transition-group';
import s from '@s/components/index.module.scss';

interface CategoriesProps {
  noText?: boolean;
}

export const Categories: FC<CategoriesProps> = ({ noText = false }) => {
  return (
    <div className={s.categories}>
      <Button className={s.blue}>
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
            <i className="far fa-list-ul" />
          </span>
        </div>
      </Button>
    </div>
  );
};
