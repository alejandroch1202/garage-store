import React from 'react';
import arrow from '@icons/arrow-dark.svg';
import search from '@icons/search.svg';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.Search}>
      <div>
        <img src={search.src} alt="search" />
        <input type="text" placeholder="Search product" />
      </div>
      <p>
        <span> Order: </span> Most recent
        <img src={arrow.src} alt="select" />
      </p>
    </div>
  );
};

export default Search;
