import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import BankItemList from "../BankItemsList/BankItemList";
import BranchMap from "../Map/BranchMap";

import "./Display.scss";

const Display = ({ bankDataArray }) => {
  const [center, setCenter] = useState({
    lat: 43.78297556464073,
    lng: -79.34445175884431,
  });

  const [zoom, setZoom] = useState(12);

  return (
    // <Container>
    <Row>
      <Col xs={3}>
        <BankItemList
          bankDataArray={bankDataArray}
          setZoom={setZoom}
          setCenter={setCenter}
        />
      </Col>
      <Col xs={9}>
        <BranchMap
          bankDataArray={bankDataArray}
          zoom={zoom}
          center={center}
        ></BranchMap>
      </Col>
    </Row>
    // </Container>
  );
};

export default Display;
