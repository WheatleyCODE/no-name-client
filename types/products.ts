export enum ProductType {
  DEFAULT = 'default',
  PRODUCT = 'product',
  SET = 'set',
}

export interface Product {
  type: ProductType;
  name: string;
  description: string;
  imgUrl: string;
  productUrl: string;
  price: number;
}
