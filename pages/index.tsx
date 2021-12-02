/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
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
} from '@components';
import { useAuth, useTypedSelector } from '@hooks';
import { wrapper } from '@store';
import { fetchUsersAC } from '@store/actions-creators/user';
import { NextThunckDispatch } from '@store/reducers';
import { UserService } from '@services/UserService';
import s from '@s/pages/index.module.scss';

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
      prev.forEach((node) => (node.innerHTML = '<i class="fal fa-chevron-right" />'));
      next.forEach((node) => (node.innerHTML = '<i class="fal fa-chevron-left" />'));
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
            <h2> Категории</h2>
          </div>
        </div>
      </div>
      <div className={s.categoriesSlider}>
        <CategoriesSlider />
      </div>
      <div className={s.mainLanding}>
        <div className={s.stickyLinks} style={{ position: 'sticky', top: 0 }}>Этот див уедет в хедер</div>
        <div className={s.width}>
          <div className={s.margin} />
          <div className={s.title}>
            <h2>Новое и популярное</h2>
          </div>
        </div>
        <ProductList />
        <Banner />
        <div className={s.width}>
          <div className={s.margin} />
          <div className={s.title}>
            <h2>Класное молодежное</h2>
          </div>
        </div>
        <ProductList test />
        <div className={s.width}>
          <div className={s.margin} />
          <div className={s.title}>
            <h2>Слайдер</h2>
          </div>
        </div>
        <ProductSlider test />
        <Banner />
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
