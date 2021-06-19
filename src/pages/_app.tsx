import React from 'react';
import { Provider } from 'react-redux';
import 'styles/globals.css';
import { Auth0Provider } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import type { Page } from '../types/page';
import store from '../redux/store';
import withRedux, { createWrapper } from 'next-redux-wrapper';

type Props = AppProps & {
  Component: Page;
};

function BrandTruthApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <Auth0Provider
      domain='brandtruth.us.auth0.com'
      clientId='va5j9WKyxeOKBdUnC0BGbtTym1D7jcgA'
      redirectUri={'http://localhost:3000'}>
      <Provider store={store}>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </Provider>
    </Auth0Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(BrandTruthApp);
