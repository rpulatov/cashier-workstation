import React from "react";

import { useSelector } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function Notification() {
  const notification = useSelector((state) => state.notification);
  React.useEffect(() => {
    if (notification.length > 0) {
      switch (notification[0].type) {
        case "error":
          NotificationManager.error(notification[0].message);
          break;
        default:
          NotificationManager.info(notification[0].message);
      }
    }
  }, [notification]);

  return <NotificationContainer />;
}
