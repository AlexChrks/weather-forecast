import React from 'react';

import styles from './Chart.module.scss';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className={styles.customTooltip}>
        <p className="label">{`${label} : ${payload[0].value}°C`}</p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;
