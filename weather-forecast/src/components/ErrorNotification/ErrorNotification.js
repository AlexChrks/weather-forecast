import React from 'react';
import cat from '../../images/crying-cat.png';
import styles from './ErrorNotification.module.scss';

function ErrorNotification() {
  return (
    <div className={styles.errorWrapper}>
      <img className={styles.errorImg} src={cat} alt='crying cat'/>
      <div>Incorrect city<br/>Try again.</div>
    </div>
  );
}

export default ErrorNotification;
