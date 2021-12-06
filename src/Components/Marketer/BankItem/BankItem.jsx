import React from "react";
import Container from "../../UI/Container/Container";

import "./BankItem.scss";
const BankItem = ({
  bankData = {},
  setZoom = () => {},
  setCenter = () => {},
  selected,
  setSelected,
}) => {
  const bankElements = (selected && Object.keys(bankData) && (
    <div>
      <p>{bankData.address}</p>
    </div>
  )) || <></>;

  return (
    <Container
      onClick={() => {
        setSelected();
        setZoom();
        setCenter();
      }}
      className={`bank_item bank_item__hover`}
    >
      <h1>Branch #{bankData.id}</h1>
      {bankElements}
    </Container>
  );
};

export default BankItem;
