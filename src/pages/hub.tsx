import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'layouts/single-pane-layout';
import LoginButton from 'components/user/login-button';
import { useSignalr } from '@known-as-bmf/react-signalr';
import { useEffect } from 'react';
import { debounceTime } from 'rxjs/operators';

const signalrEndpoint = 'http://localhost:57679/hubs/posts';

export default function Hub() {
  const { send, on } = useSignalr(signalrEndpoint);

  useEffect(() => {
    const sub = on('Message').subscribe(console.log);
    return () => sub.unsubscribe();
  }, [on]);

  useEffect(() => {
    const sub = on('NewPost').pipe(debounceTime(200)).subscribe(console.log);
    return () => sub.unsubscribe();
  }, [on]);

  //   const notify = useCallback(() => {
  //     send('remoteMethod', { foo: 'bar' });
  //   }, []);
  //     };

  return (
    <Layout>
      <Head>
        <title>BrandTruth</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>Welcome to BrandTruth! :D</h1>
        Visit our{' '}
        <Link href='/blog'>
          <a>blog</a>
        </Link>
        <LoginButton />
      </main>
    </Layout>
  );
}
