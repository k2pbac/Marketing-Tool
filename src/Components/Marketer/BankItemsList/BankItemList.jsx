import React, { useState, useContext, useEffect } from "react";

import BranchContext from "../../../store/branch-context";

import BankItem from "../BankItem/BankItem";
import SearchBox from "../Map/SearchBox";
import "./BankItemList.scss";

const BankItemList = ({ setCenter = () => {} }) => {
  const { selectedBranch, setSelectedBranch, branchData, setBranchData } =
    useContext(BranchContext);

  console.log({ selectedBranch, setSelectedBranch, branchData, setBranchData });

  useEffect(() => {
    console.log("changed");
  }, [branchData]);

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
    />
  ));

  return (
    <div className="bank-item-list">
      <SearchBox />
      <div>{bankBranchElements.length && bankBranchElements}</div>
    </div>
  );
};

export default BankItemList;
