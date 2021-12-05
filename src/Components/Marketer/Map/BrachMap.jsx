import React from "react";

import "./BranchMap.scss";
import GoogleMapReact from "google-map-react";

import BranchLocation from "./BranchLocation";

const BranchMap = ({ branchLocationData }) => {
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
        bootstrapURLKeys={{ key: "AIzaSyCmSIW7EeWc0nEU05b5YB8_2xCp0VksM7M" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {branchLocationElements}
      </GoogleMapReact>
    </section>
  );
};

export default BranchMap;
