import React from "react";
import styles from './Sort.module.scss'
import cn from 'classnames';

const Sort = () => {
  return (
    <form className={styles.form}>
      <input className={cn(styles.cheap, styles.active)} type="button" value='Самый дешевый'></input>
      <input className={styles.quick} type="button" value='Самый быстрый'></input>
      <input className={styles.optimal} type="button" value='Оптимальный'></input>
    </form>
  )
}

export default Sort;