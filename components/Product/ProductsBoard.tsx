import { FC } from 'react';
import { Product } from '@t';
import { ProductList } from './ProductList';
import s from '@s/components/index.module.scss';

interface ProductsBoardProps {
  isMobile: boolean;
  products: Product[];
}

export const ProductsBoard: FC<ProductsBoardProps> = ({ isMobile, products }) => {
  return (
    <div className={s.productsBoard}>
      <ProductList isMobile={isMobile} products={products} />
    </div>
  );
};
