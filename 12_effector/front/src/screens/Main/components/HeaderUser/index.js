import React from "react";

import { useDispatch } from "react-redux";

import styles from "./HeaderUser.module.css";

import EditUserModal from "../EditUserModal";

import PortalModal from "shared/components/PortalModal";

import { $username, userLogout, userSetted } from "domains/auth";
import { useStore } from "effector-react";

export default function HeaderUser() {
  const [show, setShow] = React.useState(false);

  const userName = useStore($username);

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <div>{userName}</div>
        <button onClick={() => setShow(true)}>Редактировать</button>
        <button onClick={() => userLogout()}>Выйти</button>
      </div>
      <div className={styles.bonuses}>Кошелек: 0.00</div>
      {show && (
        <PortalModal>
          <EditUserModal
            defaultUserName={userName}
            onChange={userSetted}
            onClose={() => setShow(false)}
          />
        </PortalModal>
      )}
    </div>
  );
}
