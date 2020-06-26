import React from "react";

import styles from "./SearchInput.module.css";
import { useHistory } from "react-router-dom";

export default function SearchInput() {

  const [value,setValue] = React.useState("")
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?value=${value}`)
  }

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
