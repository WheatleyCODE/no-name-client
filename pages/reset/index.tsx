import { ChangePasswordForm } from '@components';
import { NextPage } from 'next';
import s from '@s/pages/index.module.scss';

const Reset: NextPage = () => {
  return (
    <div className={s.forgot}>
      <ChangePasswordForm isEmail />
    </div>
  );
};

export default Reset;
