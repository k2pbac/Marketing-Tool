import React, { useState, useContext } from "react";

import "./BranchMap.scss";

import BranchContext from "../../../store/branch-context";

import GoogleMapReact from "google-map-react";
import BranchLocation from "./BranchLocation";

const BranchMap = ({ bankDataArray, zoom, center }) => {
  const { selectedBranch, setSelectedBranch } = useContext(BranchContext);

  const branchLocationElements = bankDataArray.map((branch, index) => {
    return (
      <BranchLocation
        key={branch.id}
        lat={branch.lat}
        lng={branch.lng}
        text={`Branch #${index + 1}`}
        selected={selectedBranch === branch.id}
        setSelected={() => setSelectedBranch(branch.id)}
      />
    );
  });

  return (
    <section className="branch-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
        center={center}
        zoom={zoom}
      >
        {branchLocationElements}
      </GoogleMapReact>
    </section>
  );
};

export default BranchMap;
