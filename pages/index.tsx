/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next';
import { useEffect, useState, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  MainLayout,
  Portal,
  Modal,
  ImgSlider,
  CategoriesSlider,
  Banner,
  ProductList,
  ProductSlider,
  StickyLinks,
} from '@components';
import { useAuth, useTypedSelector } from '@hooks';
import { wrapper } from '@store';
import { fetchUsersAC } from '@store/actions-creators/user';
import { NextThunckDispatch } from '@store/reducers';
import { UserService } from '@services/UserService';
import s from '@s/pages/index.module.scss';
import { titles } from 'consts';
import { Element } from 'react-scroll';

// Redux tests
export const getServerSideProps = wrapper.getServerSideProps((store): any => async () => {
  const dispatch = store.dispatch as NextThunckDispatch;
  await dispatch(await fetchUsersAC());
});

const Home: NextPage = () => {
  // Redux tests
  const { users, error } = useTypedSelector((state) => state.user);
  const [show, setShow] = useState(false);
  // const { fetchUsers } = useActions();

  // /> tests

  const [test, setTest] = useState<any>([]);
  useAuth();

  const testFN = async () => {
    try {
      const lol = await UserService.fetchUsers();
      console.log(lol.data);
      setTest(lol.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    const prev = document.querySelectorAll('.swiper-button-next');
    const next = document.querySelectorAll('.swiper-button-prev');

    if (prev !== null && next !== null) {
      prev.forEach((node) => (node.innerHTML = '<i class="fad fa-angle-right"></i>'));
      next.forEach((node) => (node.innerHTML = '<i class="fad fa-angle-left"></i>'));
    }
  });

  return (
    <MainLayout
      description="Главаная страница сайта noname"
      title="Главная"
      keywords={['Главная', 'noname']}
    >
      <div className={s.slider}>
        <ImgSlider />
      </div>
      <div className={s.mainLanding}>
        <div className={s.width}>
          <div className={s.title}>
            <h2>Категории</h2>
          </div>
        </div>
      </div>
      <div className={s.categoriesSlider}>
        <CategoriesSlider />
      </div>
      <div className={s.mainLanding}>
        <div className={s.width}>
          <div className={s.margin} />
          <div className={s.title}>
            <h2>Новое и популярное</h2>
          </div>
        </div>
        <ProductSlider tests test />
      </div>
      <div className={s.mainLanding}>
        {/* <div className={s.width}>
          <div className={s.margin} />
          <div className={s.title}>
            <h2>Новое и популярное</h2>
          </div>
        </div>
        <ProductSlider tests test /> */}

        <StickyLinks />

        {titles.map((el, i) => (
          <Fragment key={el.title}>
            <Element className={s.testss} name={el.title}>
              <div className={s.width}>
                <div className={s.margin} />
                <div className={s.title + ' ' + s.small + ' ' + (i === 0 && s.first)}>
                  <h2>{el.title}</h2>
                </div>
              </div>
              <ProductList img={el.img} test={i % 2 === 0} />
              {i % 2 === 0 && <Banner />}
            </Element>
          </Fragment>
        ))}
        <div className={s.width}>
          <div className={s.margin} />
          <div className={s.title}>
            <h2>Слайдер</h2>
          </div>
        </div>
        <ProductSlider />
        {/* <div className={s.width}>
          <div className={s.margin} />
          <div className={s.title}>
            <h2>Баллончики</h2>
          </div>
        </div>
        <ProductList test />
        <Banner /> */}
      </div>

      <CSSTransition in={show} timeout={200} classNames="modal" mountOnEnter unmountOnExit>
        <Portal>
          <Modal onCloseModal={() => setShow((prev) => !prev)} stopScroll>
            <h2 style={{ textAlign: 'center' }}>lol</h2>
          </Modal>
        </Portal>
      </CSSTransition>
    </MainLayout>
  );
};

export default Home;
