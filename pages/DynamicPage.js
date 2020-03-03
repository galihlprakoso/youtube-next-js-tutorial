import React from 'react';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';

const DynamicPage = () => {
  const router = useRouter();

  const { title } = router.query;

  return (
    <div>
      <NavBar />
      <Layout>
        <h1>{title}</h1>
        <p>This is dynamic page using query strings.</p>
      </Layout>
    </div>
  );
};

export default DynamicPage;
