import React from 'react';

const Product = (prop) => {
  const { name, discount, price, link } = prop
  return (
    <div className="product">
      <img style={{ width: "300px", height: "300px" }}
        src={link} />
      <h2>{name}</h2>
      <p>{discount}</p>
      <p style={{ color: "red" }}>{price}đ</p>
    </div>
  );
};

export default Product;
