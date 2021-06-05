import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { apiQuery } from '../../api/apiQuery';

import { passDataToStorage, setCityError } from '../../store/actions/actions';

import styles from './SearchBar.module.scss';

function SearchBar() {
  const dispatch = useDispatch();

  const inputEl = useRef(null);

  const handleSubmit = (e) => {
    const { value } = inputEl.current;

    e.preventDefault();

    apiQuery(value)
    .then((response) => {
      dispatch(passDataToStorage(response.data.daily));
    })
    .catch(() => {
      dispatch(setCityError());
    });
  }

  return (
    <form className={ styles.searchBar } onSubmit={ handleSubmit }>
      <input ref={inputEl} className={ styles.searchInput } placeholder='Type your city here'/>
      <button className={ styles.searchButton }></button>
    </form>
  );
}

export default SearchBar;
