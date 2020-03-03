import React from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';

const API_URL = (author) => `/api/randomQuote${author ? '?author=' + author : ''}`;

const fetcher = (url) => 
  fetch(url).then(r => r.json());

const PageOnePage = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(API_URL(query.author), fetcher);

  const author = data?.quoteAuthor;
  let quote = data?.quoteText;

  if(!data) quote = 'Loading quote...';
  if(error) quote = 'Failed to fetch quote';

  return (
    <div>
      <NavBar />
      <Layout>
        {author && <b>{author}</b>}
        <p>{quote}</p>
      </Layout>
    </div>
  );
};

export default PageOnePage;
