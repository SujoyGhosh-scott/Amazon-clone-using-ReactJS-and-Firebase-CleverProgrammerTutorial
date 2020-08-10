import React from "react";
import "./Cheakout.css";
import { useStateValue } from "./StateProvider";
import CheakoutProduct from "./CheakoutProduct";
import Subtotal from "./Subtotal";

function Cheakout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="outer-cheakout">
      <div className="cheakout">
        <div className="cheakout-left">
          {basket?.length === 0 ? (
            <div className="empty-basket">
              <h2>Your Shopping basket is empty</h2>
              <hr></hr>
              <p>
                You have no items in your basket. To buy or purchase click "Add
                to basket" next to your item.
              </p>
            </div>
          ) : (
            <div className="cheakout-title">
              <h2>Your Shopping basket</h2>
              <hr></hr>
              {/* list out all the cheakout product */}
              {basket.map((item) => (
                <CheakoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="cheakout-right">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
              alt=""
            />
            <div className="free-delivery">
              <small className="greenl">
                <h2>✔</h2> <p>Your order is eligible for FREE Delivery.</p>
              </small>
              <div className="selectcheakout">
                <div className="space"></div>
                <p>
                  <small> Select this option at checkout.</small>
                </p>
              </div>
            </div>
            <Subtotal />
          </div>
        )}
      </div>
      <div className="below-cheakout">
        <hr></hr>
        <p>
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price.
        </p>
        <p>
          Do you have a promotional code? We'll ask you to enter your claim code
          when it's time to pay.
        </p>
      </div>
    </div>
  );
}

export default Cheakout;
