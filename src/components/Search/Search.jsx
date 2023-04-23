import React, { useContext } from 'react';
import arrow from '@icons/arrow-dark.svg';
import search from '@icons/search.svg';
import styles from './Search.module.scss';
import AppContext from '@context/AppContext';

const Search = () => {
  const { state } = useContext(AppContext);

  const setSearchFilter = (input) => {
    state.filter = input.toLowerCase();
  };

  return (
    <div className={styles.Search}>
      <div>
        <img src={search.src} alt="search" />
        <input type="text" placeholder="Search product" onChange={(e) => setSearchFilter(e.target.value)} />
      </div>
      <p>
        <span> Order: </span> Most recent
        <img src={arrow.src} alt="select" />
      </p>
    </div>
  );
};

export default Search;
