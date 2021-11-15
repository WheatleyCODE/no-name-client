import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '@store';
import '@s/globals.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
