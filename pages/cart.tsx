import type { NextPage } from 'next';
import { CartTable, MainLayout, Promocode, ToOrder } from '@components';
import s from '@s/pages/index.module.scss';

const Cart: NextPage = () => {
  return (
    <MainLayout description="Корзина" title="Корзина" keywords={['Корзина', 'noname']}>
      <div className={s.cart}>
        <div className={s.width}>
          <h1 className={s.title}>Корзина</h1>
          <div className={s.cartPageMain}>
            <CartTable />
          </div>
          <div className={s.cartPagePromo}>
            <h3 className={s.title}>Промокод</h3>
            <Promocode />
          </div>
          <div className={s.cartPageFooter}>
            <ToOrder />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
