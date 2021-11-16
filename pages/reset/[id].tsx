import { NextPage } from 'next';
import { ChangePasswordForm } from '@components';
import s from '@s/pages/index.module.scss';

const Change: NextPage = () => {
  return (
    <div className={s.change}>
      <ChangePasswordForm />
    </div>
  );
};

export default Change;
