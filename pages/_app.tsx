import React, { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '@store';
import { useActions } from '@hooks';
import '@s/globals.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { checkAuthAC } = useActions();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuthAC();
    }
  }, []);

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
