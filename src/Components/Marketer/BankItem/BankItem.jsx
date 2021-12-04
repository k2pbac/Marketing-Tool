import React from "react";
import Button from "react-bootstrap/Button";

import styles from "./BankItem.scss";

const BankItem = (props) => {
  return (
    <div>
      <h1>Bank Branch 1</h1>
      <div>
        <Button variant="primary">Promotion</Button>
        <Button>Edit Branch Info</Button>
      </div>
    </div>
  );
};

export default BankItem;
