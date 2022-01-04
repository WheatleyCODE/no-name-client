import { NextPage } from 'next';
import {
  MainLayout,
  ProductList,
  ProductMenu,
  ProductMenuMobile,
  ProductsBoard,
} from '@components';
import { useRouter } from 'next/router';
import { data } from 'consts';
import s from '@s/pages/index.module.scss';
import { useState } from 'react';

const Product: NextPage = () => {
  const router = useRouter();
  const [activeCategories, setActiveCategories] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <MainLayout description="Категории" title="Категории" keywords={['Товар', 'noname']}>
      <div className={s.product}>
        <div className={s.width}>
          <h1 className={s.title}>{data[activeCategories].title}</h1>
          <div className={s.products}>
            <div className={s.productsHeader}>
              <div className={s.space} />
              <ProductMenuMobile
                activeCategories={activeCategories}
                setActiveCategories={(num: number) => setActiveCategories(num)}
              />
              <div className={s.buttons}>
                <div onClick={() => setIsMobile(false)} className={(!isMobile && s.active) || ''}>
                  <i className="fas fa-th-large" />
                </div>
                <div onClick={() => setIsMobile(true)} className={(isMobile && s.active) || ''}>
                  <i className="fas fa-th-list"></i>
                </div>
              </div>
            </div>
            <ProductMenu
              activeCategories={activeCategories}
              setActiveCategories={(num: number) => setActiveCategories(num)}
            />
            <div className={s.productsMain}>
              <div className={s.productsBoard}>
                <ProductsBoard isMobile={isMobile} products={data[activeCategories].products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
