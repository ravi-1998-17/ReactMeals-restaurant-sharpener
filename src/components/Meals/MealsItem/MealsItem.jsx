import React from "react";
import classes from "@/components/Meals/MealsItem/MealsItem.module.css";
import MealItemForm from "./MealItemForm";

const MealsItem = ({ id, name, description, price }, key) => {

  const addToCartHandler = () => {

  }


  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>₹{price}/-</p>
      </div>

      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
