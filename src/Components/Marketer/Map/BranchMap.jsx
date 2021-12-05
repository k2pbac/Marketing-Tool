import React from "react";

import "./BranchMap.scss";
import GoogleMapReact from "google-map-react";
import BranchLocation from "./BranchLocation";

const BranchMap = ({ bankDataArray, zoom, center }) => {
  console.log(center);
  const branchLocationElements = bankDataArray.map((branch, index) => (
    <BranchLocation
      key={branch.id}
      lat={branch.lat}
      lng={branch.lng}
      text={`Branch #${index + 1}`}
      selected={center.lat === branch.lat && center.lng === branch.lng}
    />
  ));

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
