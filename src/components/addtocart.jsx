import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const AddtoCart = (props) => {
  return (
    <div className="addCart-btn">
      <ButtonGroup size="sm">
        <Button onClick={props.onClick} id={props.id} className="black-btn">
          Add to cart
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AddtoCart;
