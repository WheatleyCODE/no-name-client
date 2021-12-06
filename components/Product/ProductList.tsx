import React, { FC } from 'react';
import { ProductCard } from '@components';
import { Product } from '@t';
import s from '@s/components/index.module.scss';

interface ProductListProps {
  products: Product[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={s.widthList}>
      <div className={s.productList}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};
