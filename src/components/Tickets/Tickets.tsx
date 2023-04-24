import React from "react";
import styles from './Tickets.module.scss';
import Ticket from "../Ticket/Ticket.tsx";

const Tickets = () => {
  return (
    <div className={styles.tickets}>
      <Ticket />
      <button type="button" className={styles.button}>Показать еще 5 билетов!</button>
    </div>
  )
};

export default Tickets;