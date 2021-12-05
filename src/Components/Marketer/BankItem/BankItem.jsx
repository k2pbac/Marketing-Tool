import React, { useState } from "react";

import "./BankItem.scss";
const BankItem = ({ bankData = {}, clicked, clickable = false }) => {
  const [isClicked, setIsClicked] = useState(clicked);

  const bankElements = (isClicked && Object.keys(bankData) && (
    <div>
      <p>{bankData.name}</p>
      <p>{bankData.address}</p>
    </div>
  )) || <></>;

  return (
    <div
      onClick={() => {
        if (clickable) {
          setIsClicked((prev) => !prev);
        }
      }}
      className={`bank_item bank_item__hover`}
    >
      <h1>Bank Branch 1</h1>
      {bankElements}
    </div>
  );
};

export default BankItem;
