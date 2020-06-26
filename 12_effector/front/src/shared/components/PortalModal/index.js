import React, { Component } from "react";
import ReactDom from "react-dom";

export default function PortalModal({ children }) {
  const element = React.useMemo(() => {
    return document.createElement("div");
  }, []);

  React.useEffect(() => {
    const modalPlace = document.getElementById("modal");
    if (modalPlace) {
      modalPlace.appendChild(element);
    }
  }, []);

  console.info({
    element,
    children,
  });

  return ReactDom.createPortal(children, element);
}
