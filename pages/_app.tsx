import React, { FC } from 'react';
import { AppProps } from 'next/app';
import '@s/globals.scss';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default WrappedApp;
