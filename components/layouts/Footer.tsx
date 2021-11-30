import { FC } from 'react';
import { Button } from '@components';
import s from '@s/components/index.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.sale}>
        <div className={s.width}>
          <h3>
            <i className="far fa-badge-percent" />
            Купи подороже! Но можно и подешевле!
          </h3>
          <Button>Подороже!</Button>
        </div>
      </div>
      <div className={s.width}>
        <h2>Супер футер</h2>
      </div>
    </footer>
  );
};
