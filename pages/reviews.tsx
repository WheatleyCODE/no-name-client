import type { NextPage } from 'next';
import { MainLayout } from '@components';
import s from '@s/pages/index.module.scss';

const Reviews: NextPage = () => {
  return (
    <MainLayout description="Отзывы" title="Отзывы" keywords={['Отзывы', 'noname']}>
      <h1>Reviews</h1>
    </MainLayout>
  );
};

export default Reviews;
