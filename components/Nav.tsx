import React from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export const Nav = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/services'>Our Services</Link>
        </li>
        <li>
          <Link href='/policy'>Privacy Policy</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
