import React from 'react';
import styles from '../assets/header.scss';

export default ({ isBlog }) => {
  const blogNav = isBlog
    ? <span className={styles.nav}>ブログ</span>
    : <a href="#" className={styles.nav__link}>ブログ</a>;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Header</div>
      <nav>
        <a href="#" className={styles.nav__link}>業務</a>
        <a href="#" className={styles.nav__link}>求人</a>
        <a href="#" className={styles.nav__link}>アクセス</a>
        {blogNav}
      </nav>
    </header>
  )
};
