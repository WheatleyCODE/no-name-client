import React, { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '@store';
import { useActions, useTypedSelector } from '@hooks';
import '@s/globals.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  // Redux tests
  const { users } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);
  // /> tests

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
