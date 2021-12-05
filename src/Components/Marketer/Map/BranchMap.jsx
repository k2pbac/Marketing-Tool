import React from "react";

import "./BranchMap.scss";
import GoogleMapReact from "google-map-react";
import BranchLocation from "./BranchLocation";

const BranchMap = ({ branchLocationData, api_key }) => {
  const defaultProps = {
    center: {
      lat: 43.78297556464073,
      lng: -79.34445175884431,
    },
    zoom: 12,
  };

  const branchLocationElements = branchLocationData.map((branch, index) => (
    <BranchLocation
      key={branch.id}
      lat={branch.lat}
      lng={branch.lng}
      text={`Branch #${index + 1}`}
    />
  ));

  return (
    <section className="branch-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {branchLocationElements}
      </GoogleMapReact>
    </section>
  );
};

export default BranchMap;
