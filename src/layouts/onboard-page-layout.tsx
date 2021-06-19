import React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
};

const OnboardPageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>Onboard Page | {title}</title>
      </Head>

      {children}
    </>
  );
};

export default OnboardPageLayout;
