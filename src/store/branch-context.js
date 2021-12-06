import React from "react";

import bankDataArray from "../data";

const BranchContext = React.createContext({
  selectedBranch: null,
  setSelectedBranch: (branch) => branch,
  branchData:
    JSON.parse(localStorage.getItem("branchData")) ||
    bankDataArray.bankDataArray,
  setBranchData: (bankData) => {
    localStorage.setItem("branchData", JSON.stringify(bankData));
    return bankData;
  },
});

export default BranchContext;
