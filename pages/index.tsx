/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { MainLayout, Portal, Modal, ImgSlider, ProductSlider } from '@components';
import { useAuth, useTypedSelector } from '@hooks';
import { wrapper } from '@store';
import { fetchUsersAC } from '@store/actions-creators/user';
import { NextThunckDispatch } from '@store/reducers';
import { UserService } from '@services/UserService';
import { CSSTransition } from 'react-transition-group';
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

  return (
    <MainLayout
      description="Главаная страница сайта noname"
      title="Главная"
      keywords={['Главная', 'noname']}
    >
      <div className={s.slider}>
        <ImgSlider />
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
