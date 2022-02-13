import { FC } from 'react';
import { carBrands } from 'consts';
import { useTypedSelector } from '@hooks';
import { CarBrandItem } from '@components';
import s from '@s/components/index.module.scss';

export const CarBrandsList: FC = () => {
  const { currentCarBrand, currentCarBrandIndex } = useTypedSelector((state) => state.carColor);

  return (
    <div className={s.carBrandsList}>
      <div className={s.carNames}>
        {carBrands.map((brand, i) => (
          <CarBrandItem brand={brand} index={i} key={brand.brandName} />
        ))}
      </div>
      <div className={s.brandBlock}>
        <span className={s.brandName}>{carBrands[currentCarBrandIndex].brandName}:</span>
        {currentCarBrand.numbers.map((num, i) => (
          <span key={num} className={s.number}>
            {num}
            {i !== currentCarBrand.numbers.length - 1 && ','}
          </span>
        ))}
      </div>
    </div>
  );
};
