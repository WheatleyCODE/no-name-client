import type { NextPage } from 'next';
import s from '@s/pages/Home.module.scss';
import { MainLayout } from '@components';

const Home: NextPage = () => {
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
