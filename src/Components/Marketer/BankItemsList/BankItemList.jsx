import React, { useState, useContext } from "react";
import BranchContext from "../../../store/branch-context";
import BankItem from "../BankItem/BankItem";

import "./BankItemList.scss";

const BankItemList = ({ bankDataArray, setCenter = () => {} }) => {
  const ctx = useContext(BranchContext);
  console.log(ctx);
  const bankBranchElements = bankDataArray.map((branch) => (
    <BankItem
      key={branch.id}
      bankData={branch}
      setCenter={() => setCenter({ lat: branch.lat, lng: branch.lng })}
      setSelected={() => {
        ctx.setSelectedBranch(branch.id);
      }}
      selected={branch.id === ctx.selectedBranch}
    />
  ));

  return (
    <div className="bank-item-list">
      {bankBranchElements.length && bankBranchElements}
    </div>
  );
};

export default BankItemList;
