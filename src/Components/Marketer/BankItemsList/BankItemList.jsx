import React from "react";
import BankItem from "../BankItem/BankItem";

import "./BankItemList.scss";

const BankItemList = ({ bankDataArray, setZoom, setCenter }) => {
  const bankBranchElements = bankDataArray.map((branch) => (
    <BankItem
      key={branch.id}
      bankData={branch}
      setZoom={() => setZoom(16)}
      setCenter={() => setCenter({ lat: branch.lat, lng: branch.lng })}
    />
  ));

  return (
    <div className="bank-item-list">
      {bankBranchElements.length && bankBranchElements}
    </div>
  );
};

export default BankItemList;
