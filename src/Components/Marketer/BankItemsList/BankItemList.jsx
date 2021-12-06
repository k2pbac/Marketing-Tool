import React, { useState, useContext, useEffect } from "react";

import BranchContext from "../../../store/branch-context";

import BankItem from "../BankItem/BankItem";
import "./BankItemList.scss";

const BankItemList = ({ setCenter = () => {} }) => {
  const { selectedBranch, setSelectedBranch, branchData, setBranchData } =
    useContext(BranchContext);

  const deleteBranch = (id) => {
    setBranchData((prev) => {
      const newObj = prev.filter((el) => el.id !== id);
      localStorage.setItem("branchData", JSON.stringify(newObj));
      return newObj;
    });
  };

  const bankBranchElements = branchData.map((branch) => (
    <BankItem
      key={branch.id}
      bankData={branch}
      setCenter={() => setCenter({ lat: branch.lat, lng: branch.lng })}
      setSelected={() => {
        if (selectedBranch === branch.id) {
          setSelectedBranch(null);
        } else setSelectedBranch(branch.id);
      }}
      selected={branch.id === selectedBranch}
      deleteBranch={() => deleteBranch(branch.id)}
    />
  ));

  return (
    <div className="bank-item-list">
      <div>{bankBranchElements.length && bankBranchElements}</div>
    </div>
  );
};

export default BankItemList;
