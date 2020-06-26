import React from "react";

import io from "socket.io-client";
import { API_DEVICE_URL } from "../../config";
import { useHistory } from "react-router-dom";

const MSG_BARCODE_ENTER = "MSG_BARCODE_ENTER";

export default function DeviceService() {
  const history = useHistory();

  React.useEffect(() => {
    const connection = io(API_DEVICE_URL);
    connection.on(MSG_BARCODE_ENTER, (message) => {
      if (message && message.barcode) {
        history.push(`/search?value=${message.barcode}`);
      }
    });
  }, []);

  return null;
}
