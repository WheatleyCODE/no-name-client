import type { NextPage } from 'next';
import { MainLayout } from '@components';
import s from '@s/pages/index.module.scss';

const Contacts: NextPage = () => {
  return (
    <MainLayout description="Контакты" title="Контакты" keywords={['Контакты', 'noname']}>
      <h1>Contacts</h1>
    </MainLayout>
  );
};

export default Contacts;
