import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};

const SignupLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </>
  );
};

export default SignupLayout;
