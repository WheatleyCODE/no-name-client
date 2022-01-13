import { FC, useEffect } from 'react';
import s from '@s/components/index.module.scss';
import { ProductSlider } from '@components/Sliders';
import { data, popularData } from 'consts';

interface ProductCardFooterProps {}

export const ProductCardFooter: FC<ProductCardFooterProps> = () => {
  useEffect(() => {
    const prev = document.querySelectorAll('.swiper-button-next');
    const next = document.querySelectorAll('.swiper-button-prev');

    if (prev !== null && next !== null) {
      prev.forEach((node) => (node.innerHTML = '<i class="fad fa-angle-right"></i>'));
      next.forEach((node) => (node.innerHTML = '<i class="fad fa-angle-left"></i>'));
    }
  });

  return (
    <div className={s.productCardFooter}>
      <h3 className={s.title}>Комплектом дешевле!</h3>
      <div className={s.slider + ' ' + s.first}>
        <ProductSlider isHeight products={data[4].products} />
      </div>
      <h3 className={s.title}>С этим товаром часто покупают</h3>
      <div className={s.slider}>
        <ProductSlider isHeight products={popularData.products} />
      </div>
    </div>
  );
};
