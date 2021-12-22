import { FC } from 'react';
import { Button } from '@components';
import { useRouter } from 'next/router';
import { Product, ProductType } from '@t';
import { PathRoutes } from 'consts';
import s from '@s/components/index.module.scss';

interface ProductCardProps {
  isMobile?: boolean;
  isHeight?: boolean;
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const router = useRouter();
  const { isMobile = false, product, isHeight = false } = props;
  const { name, description, imgUrl, type, price } = product;

  const onClickBatton = (e: any) => {
    e.stopPropagation();
  };

  let button;
  switch (type) {
    case ProductType.PRODUCT:
      button = (
        <Button onClickHandler={onClickBatton} className={s.roundOrangeTwo}>
          Выбрать
        </Button>
      );
      break;

    case ProductType.SET:
      button = (
        <Button onClickHandler={onClickBatton} className={s.roundOrangeTwo}>
          Собрать
        </Button>
      );
      break;

    default:
      button = (
        <Button onClickHandler={onClickBatton} className={s.roundOrange}>
          В корзину
        </Button>
      );
      break;
  }
  return (
    <div
      className={
        (isMobile ? s.productCardMobile : s.productCard) + ' ' + (isHeight ? s.height : '')
      }
      onClick={() => router.push(PathRoutes.PRODUCT)}
    >
      <div className={s.flex}>
        <div className={s.image}>
          <img src={imgUrl} alt={name} />
        </div>
        <div>
          <div className={s.name}>{name}</div>
          <div className={s.description}>{description}</div>
        </div>
      </div>
      <div className={s.buy}>
        <div className={s.price}>{price} ₽</div>
        <div className={s.buyButton}>{button}</div>
      </div>
    </div>
  );
};
