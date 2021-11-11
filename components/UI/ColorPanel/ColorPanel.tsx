import { FC } from 'react';
import s from '@s/components/index.module.scss';

interface ColorPanelProps {
  color: string;
}

export const ColorPanel: FC<ColorPanelProps> = ({ color }) => {
  return (
    <div className={s.colorPanel}>
      <span>
        <span>
          <i className="far fa-palette" />
        </span>
        <span className={s.text}>Ваш цвет:</span> <span className={s.color}>{color}</span>
      </span>
    </div>
  );
};
