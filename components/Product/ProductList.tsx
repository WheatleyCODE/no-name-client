import React, { FC } from 'react';
import { ProductCard } from '@components';
import { Product } from '@t';
import s from '@s/components/index.module.scss';

interface ProductListProps {
  products: Product[];
  isMobile?: boolean;
}

export const ProductList: FC<ProductListProps> = ({ products, isMobile = false }) => {
  return (
    <div className={s.widthList}>
      <div className={s.productList}>
        {products.map((product, i) => (
          <ProductCard isMobile={isMobile} key={i} product={product} />
        ))}
      </div>
    </div>
  );
};
