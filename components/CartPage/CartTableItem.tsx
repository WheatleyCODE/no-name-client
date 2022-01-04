import { FC, useState } from 'react';
import { transformPrice } from 'utils';
import { ProductCounter } from '@components/Product/ProductCounter';
import s from '@s/components/index.module.scss';

interface CartTableItemProps {}

export const CartTableItem: FC<CartTableItemProps> = () => {
  const [count, setCount] = useState(8);

  return (
    <div className={s.cartTableItem}>
      <div className={s.delete}>
        <i className="fal fa-trash-alt" />
      </div>
      <div className={s.imges}>
        <img
          src="https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB"
          alt="lol"
        />
      </div>
      <div className={s.title}>
        <div className={s.name}>Штрих-корректор</div>
        <div className={s.description}>
          Самый лучший штрих-корректор в мире японии он не победим моем все машины с ним
        </div>
        <div className={s.params}>
          <ul>
            <li>- Код краски: RAL7007</li>
            <li>- Объем: 80мл.</li>
          </ul>
        </div>
      </div>
      <div className={s.itemMobile}>
        <div className={s.imges}>
          <img
            src="https://a.allegroimg.com/original/1149d7/99e63a9f4cf39822b782db9bed38/Buteleczka-zaprawkowa-z-pedzelkiem-60ml-Finixa-TUB"
            alt="lol"
          />
        </div>
        <div className={s.title}>
          <div className={s.name}>Штрих-корректор</div>
          <div className={s.description}>
            Самый лучший штрих-корректор в мире японии он не победим моем все машины с ним
          </div>
          <div className={s.params}>
            <ul>
              <li>- Код краски: RAL7007</li>
              <li>- Объем: 80мл.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.price}>
        <span>{transformPrice(350)}</span>
      </div>
      <div className={s.count}>
        <ProductCounter
          count={count}
          addFn={() => setCount((p) => p + 1)}
          subFn={() => setCount((p) => p - 1)}
        />
      </div>
      <div className={s.sum}>
        <span>{transformPrice(3500)}</span>
      </div>
      <div className={s.mobile}>
        <div className={s.price}>
          <span>{transformPrice(350)}</span>
        </div>
        <div className={s.count}>
          <ProductCounter
            count={count}
            addFn={() => setCount((p) => p + 1)}
            subFn={() => setCount((p) => p - 1)}
          />
        </div>
        <div className={s.sum}>
          <span>{transformPrice(3500)}</span>
        </div>
      </div>
    </div>
  );
};
