import type { NextPage } from 'next';
import { Button, MainLayout } from '@components';
import { useTypedSelector } from '@hooks';
import { wrapper } from '@store';
import { fetchUsersAC } from '@store/actions-creators/user';
import { NextThunckDispatch } from '@store/reducers';
import s from '@s/pages/index.module.scss';
import { useState } from 'react';
import { UserService } from '@services/UserService';

// Redux tests
// export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
//   // const dispatch = store.dispatch as NextThunckDispatch;
//   // await dispatch(await fetchUsersAC());
// });

const Home: NextPage = () => {
  // Redux tests
  const { users, error } = useTypedSelector((state) => state.user);
  // const { fetchUsers } = useActions();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // console.log(users, error);
  // /> tests

  const [test, setTest] = useState();

  const testFN = async () => {
    try {
      const lol = await UserService.fetchUsers();
      console.log(lol.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout
      description="Главаная страница сайта noname"
      title="Главная"
      keywords={['Главная', 'noname']}
    >
      <div className={s.container}>
        <h2>content</h2>
        <Button onClickHandler={testFN}>Запросить пользователей</Button>
      </div>
    </MainLayout>
  );
};

export default Home;
