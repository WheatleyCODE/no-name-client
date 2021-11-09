import type { NextPage } from 'next';
import s from '@s/pages/Home.module.scss';
import { MainLayout } from '@components';
import { useTypedSelector } from '@hooks';
import { wrapper } from '@store';
import { fetchUsers } from '@store/actions-creators/user';
import { NextThunckDispatch } from '@store/reducers';

// Redux tests
export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunckDispatch;
  await dispatch(await fetchUsers());
});

const Home: NextPage = () => {
  // Redux tests
  const { users, error } = useTypedSelector((state) => state.user);
  // const { fetchUsers } = useActions();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  console.log(users, error);
  // /> tests

  return (
    <MainLayout
      description="Главаная страница сайта noname"
      title="Главная"
      keywords={['Главная', 'noname']}
    >
      <div className={s.container}>
        <h2>content</h2>
      </div>
    </MainLayout>
  );
};

export default Home;
