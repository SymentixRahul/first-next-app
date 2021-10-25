import React from 'react';
import styles from '../styles/Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      {children}
    </div>
  );
};
