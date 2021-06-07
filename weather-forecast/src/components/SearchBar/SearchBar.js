import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { sendApiQuery } from '../../store/actions/actions';

import styles from './SearchBar.module.scss';

function SearchBar() {
  const dispatch = useDispatch();

  const inputEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = inputEl.current;
    dispatch(sendApiQuery(value))
  }

  return (
    <form className={ styles.searchBar } onSubmit={ handleSubmit }>
      <input ref={inputEl} className={ styles.searchInput } placeholder='Type your city here'/>
      <button className={ styles.searchButton } />
    </form>
  );
}

export default SearchBar;
