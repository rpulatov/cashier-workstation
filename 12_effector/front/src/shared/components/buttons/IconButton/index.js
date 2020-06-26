import React from "react";

import styles from "./IconButton.module.css";

export default function IconButton({ icon, onClick }) {
  return <button className={styles.button} onClick={onClick}>{icon}</button>;
}
