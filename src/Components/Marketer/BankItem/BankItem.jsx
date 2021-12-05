import React, { useState } from "react";

import "./BankItem.scss";
const BankItem = ({ bankData = {}, clicked }) => {
  const [isClicked, setIsClicked] = useState(clicked);
  const bankElements = (isClicked && Object.keys(bankData) && (
    <div>
      <p>Temp Data Header</p>
      <p>{bankData.address}</p>
    </div>
  )) || <></>;

  return (
    <div
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
      className={`bank_item bank_item__hover`}
    >
      <h1>Bank of Montreal</h1>
      {bankElements}
    </div>
  );
};

export default BankItem;
