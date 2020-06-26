import React from "react";

import styles from "./SystemStatus.module.css";

function Status({ active, children }) {
  return (
    <div className={[styles.info, active ? styles.active : ""].join(" ")}>
      {children}
    </div>
  );
}

export default function SystemStatus() {
  return (
    <div className={styles.statuses}>
      <Status>подключен</Status>
      <Status active>робот подключен</Status>
      <Status>офд: все документы отправлены</Status>
    </div>
  );
}
