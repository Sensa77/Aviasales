import React from "react";
import styles from './Main.module.scss';
import Filter from "../Filter/Filter.tsx";
import Sort from "../Sort/Sort.tsx";
import Tickets from "../Tickets/Tickets.tsx";

const Main = () => {
  return (
    <div className={styles.main}>
      <Filter/>
      <div>
      <Sort/>
      <Tickets />
      </div>
    </div>
  )
}

export default Main;