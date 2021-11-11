import { FC } from 'react';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

interface CategoriesProps {
  noText?: boolean;
}

export const Categories: FC<CategoriesProps> = ({ noText = false }) => {
  return (
    <div className={s.categories}>
      <Button className={s.blue}>
        <div>
          {!noText && <span className={s.text}>Категории</span>}
          <span>
            <i className="far fa-list-ul" />
          </span>
        </div>
      </Button>
    </div>
  );
};
