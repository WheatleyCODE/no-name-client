import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PathRoutes } from 'consts';
import s from '@s/pages/index.module.scss';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(PathRoutes.REGISTRATION);
  }, []);

  return (
    <div className={s.notFount}>
      <h1>Error 404</h1>
    </div>
  );
};

export default Home;
