import React from 'react';
import { useRouter } from 'next/router';
import SidebarLayout from 'layouts/sidebar-layout';
import Head from 'next/head';
import Link from 'next/link';

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>BrandTruth Blog {pid}</title>
      </Head>
      <p>Post: {pid}</p>

      <div>
        <Link href='/blog'>
          <a>Return</a>
        </Link>
      </div>
    </>
  );
};

Post.layout = SidebarLayout;

export default Post;
