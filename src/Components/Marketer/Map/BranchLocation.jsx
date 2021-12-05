import React from "react";

import "./BranchLocation.scss";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const BranchLocation = ({ text }) => {
  return (
    <div className="branch-location">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip>
            Tooltip on <strong>top</strong>.
          </Tooltip>
        }
      >
        <h3>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </h3>
      </OverlayTrigger>
    </div>
  );
};

export default BranchLocation;
