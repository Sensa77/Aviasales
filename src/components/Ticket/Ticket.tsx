import React from "react";
import styles from "./Ticket.module.scss";

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.company}>
        <span className={styles.price}>13 400 Р</span>
        <img
          className={styles.logo}
          alt="company logo"
          src="//pics.avs.io/99/36/{3}.png"
        />
      </div>
      <div className={styles.details}>
        <div className={styles.column}>
          <span className={styles.title}>MOW – HKT</span>
          <span className={styles.value}>10:45 – 08:00</span>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>В пути</span>
          <span className={styles.value}>21ч 15м</span>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>2 пересадки</span>
          <span className={styles.value}>HKG, JNB</span>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.column}>
          <span className={styles.title}>MOW – HKT</span>
          <span className={styles.value}>11:20 – 00:50</span>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>В пути</span>
          <span className={styles.value}>13ч 30м</span>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>1 пересадка</span>
          <span className={styles.value}>HKG</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
