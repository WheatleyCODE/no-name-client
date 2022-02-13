import { FC } from 'react';
import { carBrands } from 'consts';
import { Link } from 'react-scroll';
import { useRouter } from 'next/router';
import { useTypedSelector } from '@hooks';
import { CurrentCarBrand } from '@t';
import s from '@s/components/index.module.scss';

interface CarBrandItemProps {
  brand: CurrentCarBrand;
  index: number;
}

export const CarBrandItem: FC<CarBrandItemProps> = ({ brand, index }) => {
  const router = useRouter();
  const { hashLink, currentCarBrandIndex } = useTypedSelector((state) => state.carColor);

  const onBrandClick = (i: number) => {
    router.push({
      query: { brand: carBrands[i].brandName },
    });
  };

  return (
    <Link
      onClick={() => onBrandClick(index)}
      to={hashLink}
      spy
      smooth
      offset={-150}
      duration={500}
      className={index === currentCarBrandIndex ? s.carBrandItem + ' ' + s.active : s.carBrandItem}
    >
      <span>
        <i className="fal fa-car" />
        {brand.brandName}
      </span>
    </Link>
  );
};
