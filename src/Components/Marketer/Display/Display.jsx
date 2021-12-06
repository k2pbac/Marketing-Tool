import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BranchContext from "../../../store/branch-context";
import LocationContext from "../../../store/location-context";

import BankItemList from "../BankItemsList/BankItemList";
import BranchMap from "../Map/BranchMap";

import "./Display.scss";

const bankDataArray = [
  {
    id: 1,
    position: "A",
    name: "BMO",
    address: "31 Kempsell Crescent, North York, ON M2J 2Z6",
    lat: 43.78297556464073,
    lng: -79.34445175884431,
  },
  {
    id: 2,
    position: "B",
    name: "BMO",
    address: "Pleasant View, Toronto, ON",
    lat: 43.784067088689056,
    lng: -79.32875451376958,
  },
  {
    id: 3,
    position: "C",
    name: "BMO",
    address: "495 Denison St, Markham, ON L3R 1B8",
    lat: 43.82297556464073,
    lng: -79.34445175884431,
  },
];

const Display = () => {
  const [center, setCenter] = useState({
    lat: 43.76406519492777,
    lng: -79.33268017418551,
  });

  const [zoom, setZoom] = useState(12);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [location, setLocation] = useState("");
  const [updateLocation, setUpdateLocation] = useState(false);
  const [branchData, setBranchData] = useState(
    JSON.parse(localStorage.getItem("branchData")) || bankDataArray
  );

  return (
    <LocationContext.Provider
      value={{ location, setLocation, updateLocation, setUpdateLocation }}
    >
      <BranchContext.Provider
        value={{ selectedBranch, setSelectedBranch, branchData, setBranchData }}
      >
        <Row>
          <Col xs={3} className="bank-items-panel">
            <div className="d-flex justify-content-center">
              <img className="bank-logo" src="images/logo.png" alt="..." />
            </div>
            <BankItemList
              setZoom={setZoom}
              setCenter={setCenter}
              center={center}
            />
          </Col>
          <Col xs={9} className="map-panel">
            <BranchMap zoom={zoom} center={center}></BranchMap>
          </Col>
        </Row>
      </BranchContext.Provider>
    </LocationContext.Provider>
  );
};

export default Display;
