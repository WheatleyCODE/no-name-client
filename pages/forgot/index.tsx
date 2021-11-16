import { ChangePasswordForm } from '@components';
import { NextPage } from 'next';
import s from '@s/pages/index.module.scss';

const Forgot: NextPage = () => {
  return (
    <div className={s.forgot}>
      <ChangePasswordForm />
    </div>
  );
};

export default Forgot;
