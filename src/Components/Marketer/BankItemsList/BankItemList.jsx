import React from "react";
import BankItem from "../BankItem/BankItem";

import "./BankItemList.scss";

const BankItemList = ({ bankDataArray }) => {
  const bankBranchElements = bankDataArray.map((branch) => (
    <BankItem key={branch.id} bankData={branch} />
  ));

  return (
    <div className="bank-item-list">
      {bankBranchElements.length && bankBranchElements}
    </div>
  );
};

export default BankItemList;
