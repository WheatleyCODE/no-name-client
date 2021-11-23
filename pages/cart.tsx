import type { NextPage } from 'next';
import { MainLayout } from '@components';
import s from '@s/pages/index.module.scss';

const Cart: NextPage = () => {
  return (
    <MainLayout description="Корзина" title="Корзина" keywords={['Корзина', 'noname']}>
      <h1>Cart</h1>
    </MainLayout>
  );
};

export default Cart;
