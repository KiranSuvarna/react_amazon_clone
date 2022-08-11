import React from "react";
import "../Product.css";
import { useStateValue } from "../StateProvider";

function Product({ title, rating, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Dispatch the item into the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        rating: rating,
        image: image,
        price: price,
      },
    });
  };

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

      <button onClick={addToBasket}>"Add to Basket"</button>
    </div>
  );
}

export default Product;
