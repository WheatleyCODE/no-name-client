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
      <div className={s.color}>
        <div className={s.width}>
          <h1 className={s.title}>Как узнать код цвета автомобиля?</h1>
          <div className={s.carNames}>Names</div>
          <div className={s.carImg}>Img</div>
          <div className={s.text}>Text</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CarColor;
