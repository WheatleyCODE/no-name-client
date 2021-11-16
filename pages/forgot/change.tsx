import { NextPage } from 'next';
import s from '@s/components/index.module.scss';

interface ChangeProps {}

const Change: NextPage<ChangeProps> = () => {
  return (
    <div className={s.change}>
      <h1>ChangeProps</h1>
    </div>
  );
};

export default Change;
