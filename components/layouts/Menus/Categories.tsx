import { FC } from 'react';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

export const Categories: FC = () => {
  return (
    <div className={s.categories}>
      <Button className={s.blue}>
        <span>
          Категории <i className="far fa-list-ul" />
        </span>
      </Button>
    </div>
  );
};
