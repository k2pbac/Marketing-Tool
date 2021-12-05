import React, { useState } from "react";

import "./BranchLocation.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const BranchLocation = ({ text }) => {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <div
      onMouseEnter={() => setStyle({ display: "block" })}
      onMouseLeave={() => setStyle({ display: "none" })}
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
