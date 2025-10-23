import React from "react";
import headerBG from "@/assets/headerBG.jpg";
import classes from "@/components/Layout/Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
          <h2 className={classes.logo}>ReactMeals</h2>
          <HeaderCartBtn />
      </header>
        <div className={classes["header-img"]}>
          <img src={headerBG} alt="Main Header Foo table image" />
        </div>
    </>
  );
};

export default Header;
