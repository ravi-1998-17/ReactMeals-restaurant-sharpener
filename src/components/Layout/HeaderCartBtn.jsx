import React from "react";
import classes from "@/components/Layout/HeaderCartBtn.module.css"
import CartIcon from "../Cart/CartIcon";

const HeaderCartBtn = () => {
  return (
    <>
      <button className={classes.cartBtn}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes["card-text"]}>Cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </>
  );
};

export default HeaderCartBtn;
