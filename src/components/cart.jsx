import React, { useState } from "react";
import { ButtonGroup, Button, Modal, Row, Col } from "react-bootstrap";
import "../css/cart.css";

const Cart = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showItem = (length) => {
    
    const item = props.cartCount.map((i) => (
      <Row key={i.id}>
        <Col xs={12}>
          <div key={i.id}>
            <div className="cart-item">
              <div className="clearfix">
                <button
                  onClick={(e) => props.doDelete(e.currentTarget)}
                  id={i.id}
                  className="close-btn float-right"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-x-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="row">
                <div className="col-6">
                  <img src={i.data.image} alt="product-pic" />
                  <p>{i.data.title}</p>
                  <p>
                    <span className="dollar-sign">$</span>
                    <span className="price">{i.data.price}</span>
                  </p>
                </div>
                <div className="col-6 d-flex flex-column align-self-center">
                  <div className="price-sum">
                    <span className="dollar-sign">$</span>
                    {i.sum}
                  </div>
                  <ButtonGroup size="sm">
                    <Button className="btn-add" onClick={props.doAdd} id={i.id}>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-plus"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                        />
                      </svg>
                    </Button>
                    <span className="count-span">{i.count}</span>
                    <Button
                      className="btn-minus"
                      onClick={props.doMinus}
                      id={i.id}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-dash "
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    ));
    const total = (
      <div className="total-price d-flex align-self-center justify-content-end" key={props.total}>
        <span className="total-title">Total:</span>
        <span className="price total-price">{props.total}</span>
      </div>
    );
    const emptyMsg = <span className="empty-msg">Your cart is empty.</span>;
    if (length > 0) {
      return [item, total];
    } else {
      return emptyMsg;
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="primary"
        onClick={handleShow}
        className="cart-btn black-btn float-right"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-cart4"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
          />
        </svg>

        <span className="m-2">{props.cartCount.length}</span>
      </Button>

      <div className="clearfix" key={props.id}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>{showItem(props.cartCount.length)}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Proceed to checkout
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </React.Fragment>
  );
};
export default Cart;
