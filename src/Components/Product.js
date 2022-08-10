import React from "react";
import "../Product.css";

function Product({ title, rating, image, price }) {
  return (
    <div className="product">
      <div classNwme="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>

      <button>"Add to Basket"</button>
    </div>
  );
}

export default Product;
