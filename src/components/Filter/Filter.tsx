import React from "react";
import styles from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.section}>
      <span className={styles.title}>Количество пересадок</span>
      <form className={styles.form}>
        <input type="checkbox" className={styles.checkbox} id="all" />
        <label className={styles.label} htmlFor='all'>Все</label>
        <input type="checkbox" className={styles.checkbox} id="without" />
        <label className={styles.label} htmlFor='without'>Без пересадок</label>
        <input type="checkbox" className={styles.checkbox} id="one" />
        <label className={styles.label} htmlFor='one'>1 пересадка</label>
        <input type="checkbox" className={styles.checkbox} id="two" />
        <label className={styles.label} htmlFor='two'>2 пересадки</label>
        <input type="checkbox" className={styles.checkbox} id="three" />
        <label className={styles.label} htmlFor='three'>3 пересадки</label>
      </form>
    </div>
  )
}

export default Filter;