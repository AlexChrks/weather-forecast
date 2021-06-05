import React from 'react';
import ForecastWidget from '../ForecastWidget/ForecastWidget';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.globalWrapper}>
      <ForecastWidget/>
    </div>
  );
}

export default App;
