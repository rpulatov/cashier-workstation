import React from "react";

import styles from "./SumInfo.module.css";

export default function SumInfo({ label, value, attention }) {
  return (
    <div
      className={[styles.container, attention ? styles.attention : ""].join(" ")}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{(value || 0).toFixed(2)}</div>
    </div>
  );
}
