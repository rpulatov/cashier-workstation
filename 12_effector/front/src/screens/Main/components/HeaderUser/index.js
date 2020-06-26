import React from "react";

import { useDispatch } from 'react-redux'

import styles from "./HeaderUser.module.css";

import EditUserModal from "../EditUserModal";

import PortalModal from "shared/components/PortalModal";
import { useSelector } from "reduxStore";
import { logoutAction, setUsernameAction } from "reduxStore/reducers/auth";

export default function HeaderUser() {
  const [show, setShow] = React.useState(false);

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <div>{userName}</div>
        <button onClick={() => setShow(true)}>Редактировать</button>
        <button onClick={() => dispatch(logoutAction())}>Выйти</button>
      </div>
      <div className={styles.bonuses}>Кошелек: 0.00</div>
      {show && (
        <PortalModal>
          <EditUserModal
            defaultUserName={userName}
            onChange={(name) => dispatch(setUsernameAction(name))}
            onClose={() => setShow(false)}
          />
        </PortalModal>
      )}
    </div>
  );
}
