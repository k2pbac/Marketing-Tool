import React, { useState } from "react";

import Container from "../../UI/Container/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./BankItem.scss";
const BankItem = ({
  bankData = {},
  setZoom = () => {},
  setCenter = () => {},
  selected,
  setSelected,
  deleteBranch,
  addPromotionDetails,
}) => {
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(bankData.promotion.caption || "");
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const handleSave = () => {
    uploadImage(image);
  };

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "iva98qqq");
    data.append("cloud_name", "dzerhy9du");
    fetch("https://api.cloudinary.com/v1_1/dzerhy9du/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        addPromotionDetails(textValue, data.url);
        setIsEditing(false);
      })
      .catch((err) => console.log(err));
  };

  const promotionModal = (
    <Modal style={{ textAlign: "center" }} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Promotion</Modal.Title>
      </Modal.Header>
      {((isEditing || !bankData.promotion.caption) && (
        <Modal.Body>
          <textarea
            onChange={(e) => setTextValue(e.target.value)}
            cols="32"
            rows="6"
            value={textValue}
            placeholder={"No promotion found."}
          ></textarea>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          ></input>
        </Modal.Body>
      )) || (
        <>
          <img src={bankData.promotion.image} alt="..." />
          <p>{bankData.promotion.caption}</p>
        </>
      )}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {((isEditing || !bankData.promotion.caption) && (
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        )) || (
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );

  const bankElements = (selected && Object.keys(bankData) && (
    <div>
      {promotionModal}
      <p style={{ marginBottom: "10px" }}>{bankData.address}</p>
      <Button
        onClick={handleShow}
        style={{ marginRight: "10px" }}
        size="sm"
        variant="success"
      >
        Promotion
      </Button>
    </div>
  )) || <></>;

  return (
    <Container
      onClick={() => {
        if (!selected) {
          setSelected();
          setZoom();
          setCenter();
        }
      }}
      className={`bank_item ${(!selected && "hoverable") || ""}`}
    >
      {selected && (
        <FontAwesomeIcon
          className="delete-item__icon"
          color="red"
          icon={faTimes}
          onClick={deleteBranch}
        />
      )}
      <h1>Branch #{bankData.id}</h1>
      {bankElements}
    </Container>
  );
};

export default BankItem;
