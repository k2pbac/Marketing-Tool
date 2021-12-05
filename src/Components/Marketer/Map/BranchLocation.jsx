import React, { useState, useEffect } from "react";

import "./BranchLocation.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const BranchLocation = ({ text, selected, setSelected }) => {
  const [style, setStyle] = useState({ display: "none" });

  useEffect(() => {
    if (selected) {
      setStyle({ display: "block" });
    } else {
      setStyle({ display: "none" });
    }
  }, [selected]);

  return (
    <div
      onClick={() => {
        setSelected();
      }}
      className="branch-location"
    >
      <h3>
        <div className={`text-wrapper hvr-bubble-bottom`} style={style}>
          {text}
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
      </h3>
    </div>
  );
};

export default BranchLocation;
