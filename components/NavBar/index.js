import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/PageOne">
            <a>PageOne</a>
          </Link>
        </li>
        <li>
          <Link href="/PageTwo">
            <a>PageTwo</a>
          </Link>
        </li>
        <li>
          <Link href="/PageThree">
            <a>PageThree</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
