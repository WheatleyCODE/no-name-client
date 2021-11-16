import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, MainLayout } from '@components';
import { useAuth, useTypedSelector } from '@hooks';
import { wrapper } from '@store';
import { fetchUsersAC } from '@store/actions-creators/user';
import { NextThunckDispatch } from '@store/reducers';
import { UserService } from '@services/UserService';
import s from '@s/pages/index.module.scss';

// Redux tests
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunckDispatch;
  await dispatch(await fetchUsersAC());
});

const Home: NextPage = () => {
  // Redux tests
  const { users, error } = useTypedSelector((state) => state.user);
  // const { fetchUsers } = useActions();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // console.log(users, error);
  // /> tests

  const [test, setTest] = useState<any>([]);
  useAuth();

  const testFN = async () => {
    try {
      const lol = await UserService.fetchUsers();
      console.log(lol.data)
      setTest(lol.data);
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
        <div>
          <br />
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <br />
          <ul>
            {test.map((tes: any) => (
              <li key={tes._id}>{tes.email}</li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
