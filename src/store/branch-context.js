import React from "react";

const BranchContext = React.createContext({
  selectedBranch: null,
  setSelectedBranch: (branch) => branch,
});

export default BranchContext;
