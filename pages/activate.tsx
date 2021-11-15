import type { NextPage } from 'next';
import { Logo, SendMailAgain } from '@components';
import { useAuth } from '@hooks';
import s from '@s/pages/index.module.scss';

const Home: NextPage = () => {
  const { user } = useAuth();

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

export default Home;
