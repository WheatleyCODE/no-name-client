import { FC } from 'react';
import { Product } from '@t';
import s from '@s/components/index.module.scss';
import { ProductList } from './ProductList';

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
