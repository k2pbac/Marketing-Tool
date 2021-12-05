import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const BranchLocation = ({ text }) => {
  return (
    <h3>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </h3>
  );
};

export default BranchLocation;
