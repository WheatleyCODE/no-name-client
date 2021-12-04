import React, { FC } from 'react';
import { ProductCard } from '@components';
import s from '@s/components/index.module.scss';

interface ProductListProps {
  test?: boolean;
  img?: string;
}

export const ProductList: FC<ProductListProps> = ({ test = false, img }) => {
  const product = test ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={s.widthList}>
      <div className={s.productList}>
        {product.map((_, i) => (
          <ProductCard img={img} key={i} />
        ))}
      </div>
    </div>
  );
};
