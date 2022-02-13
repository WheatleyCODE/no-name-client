import { FC } from 'react';
import { Element } from 'react-scroll';
import { useTypedSelector } from '@hooks';
import s from '@s/components/index.module.scss';

// Нужно фиксить картинки
export const CarImages: FC = () => {
  const { hashLink, numbers, currentCarBrand } = useTypedSelector((state) => state.carColor);

  const images: JSX.Element[] = numbers.map((num) => {
    let isActive = false;

    currentCarBrand.numbers.forEach((actNum) => {
      if (num === actNum) {
        isActive = true;
      }
    });

    return (
      <img
        className={isActive ? s.show : s.display}
        key={num}
        src={`http://192.168.0.224:5000/table/car_${num}.png`}
        alt="car"
      />
    );
  });

  return (
    <Element name={hashLink} className={s.carImages}>
      <img src="http://192.168.0.224:5000/table/carCart.png" alt="car" />
      {images}
    </Element>
  );
};
