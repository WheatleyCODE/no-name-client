import { NextPage } from 'next';
import { MainLayout } from '@components';
import { useRouter } from 'next/router';
import { categoriesMenuItems } from 'consts';
import s from '@s/pages/index.module.scss';

const Product: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout description="Категории" title="Категории" keywords={['Товар', 'noname']}>
      <div className={s.product}>
        <div className={s.width}>
          <h1 className={s.title}>Категории</h1>
          <div className={s.products}>
            <div className={s.productsHeader}>
              <h2>Хедер</h2>
              <div className={s.buttons}>
                <div>
                  <i className="fas fa-th-large" />
                </div>
                <div>
                  <i className="fas fa-th-list"></i>
                </div>
              </div>
            </div>
            <div className={s.productsMain}>
              <div className={s.productsMenu}>
                <div>
                  <ul>
                    {categoriesMenuItems.map((el) => (
                      <li key={el.name}>
                        <i className={el.icon}></i>
                        {el.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={s.productsBoard}>
                <h2>Основа</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
