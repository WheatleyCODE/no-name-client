import { FC } from 'react';
import s from '@s/components/index.module.scss';
import { popularData } from 'consts';
import { ProductSlider } from '@components/Sliders';

interface NewSliderProps {}

export const NewSlider: FC<NewSliderProps> = () => {
  return (
    <div className={s.newSlider}>
      <ProductSlider isHeight isMobile products={popularData.products} />
    </div>
  );
};
