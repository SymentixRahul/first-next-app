import React from 'react';

import headerStyles from '../styles/Header.module.css';

export const Header = () => {
  return (
    <div className={headerStyles.title}>
      Welcome to Next<span className={headerStyles.js}>JS</span>
    </div>
  );
};
