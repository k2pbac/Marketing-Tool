import React, { useContext } from "react";
import Container from "../../UI/Container/Container";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import BranchContext from "../../../store/branch-context";

import "./BankItem.scss";
const BankItem = ({
  bankData = {},
  setZoom = () => {},
  setCenter = () => {},
  selected,
  setSelected,
  deleteBranch,
}) => {
  const bankElements = (selected && Object.keys(bankData) && (
    <div>
      <p style={{ marginBottom: "10px" }}>{bankData.address}</p>
      <Button style={{ marginRight: "10px" }} size="sm" variant="success">
        Promotion
      </Button>
    </div>
  )) || <></>;

  return (
    <Container
      onClick={() => {
        if (!selected) {
          setSelected();
          setZoom();
          setCenter();
        }
      }}
      className={`bank_item ${(!selected && "hoverable") || ""}`}
    >
      {selected && (
        <FontAwesomeIcon
          className="delete-item__icon"
          color="red"
          icon={faTimes}
          onClick={deleteBranch}
        />
      )}
      <h1>Branch #{bankData.id}</h1>
      {bankElements}
    </Container>
  );
};

export default BankItem;
