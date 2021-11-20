import type { NextPage } from 'next';
import { Logo, PageCloses, SendMailAgain } from '@components';
import { useAuth } from '@hooks';
import { AuthService } from '@services/AuthService';
import s from '@s/pages/index.module.scss';

const Activate: NextPage = () => {
  const { user } = useAuth();

  const sendMail = async (email: string) => {
    await AuthService.sendActivationMail(email);
  };

  if (user?.isActivated === undefined || user.isActivated) {
    return <PageCloses text="Возможно ваш аккаунт уже активирван или вы не вошли в систему" />;
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
      <SendMailAgain callback={sendMail} email={user.email} />
    </div>
  );
};

export default Activate;
