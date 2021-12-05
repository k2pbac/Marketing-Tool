import React from "react";

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
    <div
      onClick={() => {
        setSelected();
        setZoom();
        setCenter();
      }}
      className={`bank_item bank_item__hover`}
    >
      <h1>Branch #{bankData.id}</h1>
      {bankElements}
    </div>
  );
};

export default BankItem;
