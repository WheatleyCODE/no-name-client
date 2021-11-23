import type { NextPage } from 'next';
import { MainLayout } from '@components';
import s from '@s/pages/index.module.scss';

const CarColor: NextPage = () => {
  return (
    <MainLayout
      description="Узнать цвет автомобиля"
      title="Узнать цвет автомобиля"
      keywords={['Как узнать цвет автомобиля', 'noname']}
    >
      <h1>CarColor</h1>
    </MainLayout>
  );
};

export default CarColor;
