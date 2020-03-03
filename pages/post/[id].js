import React from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import NavBar from '../../components/NavBar';
import Layout from '../../components/Layout';

const PostPage = ({ post }) => {
  const router = useRouter();
  return (
    <div>
      <NavBar />
      <Layout>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Layout>      
      <style jsx>{`
       p {
          color: gray;
        }
        h2 {
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

PostPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { post }
}


export default PostPage;
