import React from "react";
import "./CheakoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheakoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="cheakoutproduct">
      <img className="cheakoutproduct-image" src={image} alt="" />
      <div className="cheakoutproduct-info">
        <p className="cheakoutproduct-title">{title}</p>
        <p className="cheakoutproduct-price">
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>

        <div className="cheakoutproduct-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheakoutProduct;
