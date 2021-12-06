import React from "react";

import "./Container.scss";

const Container = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`container-ui ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
