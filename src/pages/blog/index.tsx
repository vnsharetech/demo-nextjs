import React from 'react';
import SidebarLayout from 'layouts/sidebar-layout';
import Link from 'next/link';

const posts = [
  { id: 1, title: 'Do the thing' },
  { id: 2, title: 'Another thing' },
  { id: 3, title: 'Whoa so many things' },
];
const BlogHome = () => {
  return (
    <>
      <div>This is the BrandTruth blog</div>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <Link href={`/blog/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

BlogHome.layout = SidebarLayout;

export default BlogHome;
