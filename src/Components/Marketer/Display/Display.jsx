import React, { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BranchContext from "../../../store/branch-context";
import LocationContext from "../../../store/location-context";
import SearchBox from "../Map/SearchBox";

import BankItemList from "../BankItemsList/BankItemList";
import BranchMap from "../Map/BranchMap";
import bankDataArray from "../../../data";
import "./Display.scss";

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
    JSON.parse(localStorage.getItem("branchData")) ||
      bankDataArray.bankDataArray
  );

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("branchData"))) {
      localStorage.setItem("branchData", JSON.stringify(branchData));
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{ location, setLocation, updateLocation, setUpdateLocation }}
    >
      <BranchContext.Provider
        value={{ selectedBranch, setSelectedBranch, branchData, setBranchData }}
      >
        <Row>
          <Col xs={3} className="bank-items-panel">
            <div
              style={{ height: "300px" }}
              className="d-flex justify-content-center flex-column align-items-center m-auto"
            >
              <img className="bank-logo" src="images/logo.png" alt="..." />
              <div className="d-flex justify-content-center">
                <SearchBox />
              </div>
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
