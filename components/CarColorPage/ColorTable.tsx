import { FC, useState } from 'react';
import s from '@s/components/index.module.scss';

interface ColorTableProps {
  url: string | null;
}

export const ColorTable: FC<ColorTableProps> = () => {
  const [showColorTable, setShowColorTable] = useState(false);

  return (
    <div className={s.colorTable}>
      <div aria-hidden onClick={() => setShowColorTable((p) => !p)} className={s.photo}>
        <div className={s.lable}>
          <i className="fal fa-image" />
          <span>Посмотреть</span>
          <i className="fal fa-plus" />
        </div>
        {showColorTable && (
          <div className={s.img}>
            <i className="fad fa-image" />
          </div>
        )}
      </div>
    </div>
  );
};
