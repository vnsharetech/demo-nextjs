import React from 'react';
import Head from 'next/head';

const FavIcons = (props) => (
  <Head>
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
    <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#00253e' />
    <meta name='apple-mobile-web-app-title' content='BrandTruth' />
    <meta name='application-name' content='BrandTruth' />
    <meta name='msapplication-TileColor' content='#00253e' />
    <meta name='theme-color' content='#00253e' />
  </Head>
);

export default FavIcons;
