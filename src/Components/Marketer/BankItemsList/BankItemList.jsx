import React, { useState, useContext } from "react";

import LocationContext from "../../../store/location-context";
import BranchContext from "../../../store/branch-context";

import Container from "../../UI/Container/Container";
import BankItem from "../BankItem/BankItem";
import SearchBox from "../Map/SearchBox";
import "./BankItemList.scss";

const BankItemList = ({ bankDataArray, setCenter = () => {} }) => {
  const [bankData, setBankData] = useState(bankDataArray);

  const { selectedBranch, setSelectedBranch } = useContext(BranchContext);
  const bankBranchElements = bankData.map((branch) => (
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
      <Container
        onClick={() =>
          setBankData((prev) => {
            const newArray = [
              ...prev,
              { id: 4, position: "C", name: "BMO", address: "123 ABC Street" },
            ];
            return newArray;
          })
        }
        className="new-item"
      >
        <h1>Create new branch</h1>
      </Container>
    </div>
  );
};

export default BankItemList;
