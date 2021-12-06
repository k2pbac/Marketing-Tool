import React, { useState, useContext, useEffect } from "react";

import "./BranchMap.scss";

import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import BranchContext from "../../../store/branch-context";
import LocationContext from "../../../store/location-context";

import GoogleMapReact from "google-map-react";
import BranchLocation from "./BranchLocation";

import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_MAP_API);

const BranchMap = ({ bankDataArray, zoom, center }) => {
  const { selectedBranch, setSelectedBranch } = useContext(BranchContext);
  const { location, setLocation } = useContext(LocationContext);
  const [bankData, setBankData] = useState(bankDataArray);
  const [displayPopover, setDisplayPopover] = useState(false);
  const [centerState, setCenterState] = useState(center);

  useEffect(() => {
    console.log("here");
    if (location) {
      Geocode.fromAddress(location).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          setCenterState({ lat, lng });
          setDisplayPopover(true);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [location]);

  const popover = (
    <Popover lng={centerState.lng} lat={centerState.lat}>
      <Popover.Header as="h3">New Branch</Popover.Header>
      <Popover.Body className="new-location-info">
        <p style={{ marginBottom: "10px" }}>{location}</p>
        <div>
          <Button style={{ marginRight: "10px" }} size="sm" variant="success">
            Confirm
          </Button>
          <Button
            onClick={() => {
              setDisplayPopover(false);
              setCenterState((prev) => ({
                lat: prev.lat + 0.10000000000002,
                lng: prev.lng + 0.10000000000002,
              }));
            }}
            size="sm"
            variant="danger"
          >
            Cancel
          </Button>
        </div>
      </Popover.Body>
    </Popover>
  );

  const branchLocationElements = bankData.map((branch, index) => {
    return (
      <BranchLocation
        key={branch.id}
        lat={branch.lat}
        lng={branch.lng}
        text={`Branch #${index + 1}`}
        selected={selectedBranch === branch.id}
        setSelected={() => {
          if (selectedBranch === branch.id) {
            setSelectedBranch(null);
          } else setSelectedBranch(branch.id);
        }}
      />
    );
  });

  return (
    <section className="branch-map">
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
          center={centerState}
          zoom={zoom}
        >
          {branchLocationElements}
          {displayPopover && popover}
        </GoogleMapReact>
      </OverlayTrigger>
    </section>
  );
};

export default BranchMap;
