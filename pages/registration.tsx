import { MainLayout } from '@components';
import { NextPage } from 'next';

const Registration: NextPage = () => {
  return (
    <MainLayout
      description="Регистрация на сайте noname"
      title="Регистрация"
      keywords={['Регистрация', 'noname']}
    >
      <div>
        <h1>Registration</h1>
      </div>
    </MainLayout>
  );
};

export default Registration;
