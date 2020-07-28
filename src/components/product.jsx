import React from "react";
import "../css/product.css";

const Product = (props) => {
  const { data } = props;

  const item = (
    <React.Fragment>
      <img src={data.image} alt="product-img" />

      <p className="pd-title">{data.title}</p>
      <p className="pd-des">{data.description}</p>
      <p className="pd-price">
        <span className="dollar-sign">$</span>
        <span className="price">{data.price}</span>
      </p>
    </React.Fragment>
  );

  return <React.Fragment>{item}</React.Fragment>;
};

export default Product;
