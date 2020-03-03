import React, { useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';

const IndexPage = ({ posts }) => {
  const [title, setTitle] = useState('');
  return (
    <div>
      <NavBar />
      <Layout>
        <p>This is home page!</p>
        <input
          type="text"
          placeholder="Input page title"
          onChange={e => setTitle(e.target.value)}
        />
        <Link href={`/DynamicPage?title=${title}`}>
          <a>Go To dynamic Page</a>
        </Link>

        <ol>
          {posts.map(post => (
            <li key={`Post_${post.id}`}>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return { posts }
}

export default IndexPage;
