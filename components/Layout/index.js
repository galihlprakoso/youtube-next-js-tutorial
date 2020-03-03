import React from 'react';
import styles from './style.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Layout;
