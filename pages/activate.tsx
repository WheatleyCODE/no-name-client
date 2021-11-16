import type { NextPage } from 'next';
import { Logo, SendMailAgain } from '@components';
import { useAuth } from '@hooks';
import { useRouter } from 'next/router';
import { PathRoutes } from 'consts';
import { useEffect } from 'react';
import s from '@s/pages/index.module.scss';

const Activate: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.email) {
      router.push(PathRoutes.HOME);
    }
  }, []);

  if (!user?.email) {
    return null;
  }

  return (
    <div className={s.activate}>
      <div className={s.logoContainer}>
        <Logo />
      </div>
      <h1 className={s.emailTitle}>
        На вашу почту: <span className={s.email}>{user.email}</span>
      </h1>
      <h2>Было выслано письмо с сылкой для активации аккаунта</h2>
      <SendMailAgain email={user.email} />
    </div>
  );
};

export default Activate;
