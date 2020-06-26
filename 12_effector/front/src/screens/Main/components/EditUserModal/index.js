import React from "react";

import styles from "./EditUserModal.module.css";

function EditUserModal({ defaultUserName, onChange, onClose }) {
  const [value, setValue] = React.useState(defaultUserName);

  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      onChange(value);
      onClose();
    },
    [value, onChange, onClose]
  );

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.item}>
        <label>
          <span>Имя пользователя</span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
      <div className={[styles.item,styles.buttonGroup].join(' ')}>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={() => onClose()}>
          Отменить
        </button>
      </div>
    </form>
  );
}

export default EditUserModal;
