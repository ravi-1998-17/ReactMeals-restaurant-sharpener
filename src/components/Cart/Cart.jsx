import React from "react";
import classes from "@/components/Cart/Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "01", name: "Shahi Paneer", price: 250 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>160</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["buttons--alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.buttons}>Order</button>
        </div>
      </Modal>
    </Modal>
  );
};

export default Cart;
