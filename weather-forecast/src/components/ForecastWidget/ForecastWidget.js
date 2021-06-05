import React from 'react';
import { useSelector } from 'react-redux';

import SearchBar from '../SearchBar/SearchBar';
import ErrorNotification from '../ErrorNotification/ErrorNotification';
import Chart from '../Chart/Chart';

import styles from './ForecastWidget.module.scss';


function ForecastWidget() {

  const store = useSelector((state) => state);

  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <h3 className={styles.logo}>Forecast App</h3>
      { store.weekForecast && <Chart /> }
      { store.cityError && <ErrorNotification /> }
    </div>
  );
}

export default ForecastWidget;
