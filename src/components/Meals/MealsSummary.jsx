import React from "react";
import classes from "../Meals/MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <>
      <section className={classes.mealsSummary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our wide and diverse selection of
          delicious options, thoughtfully prepared to satisfy your cravings.
          Enjoy a freshly made lunch or dinner in the comfort and convenience of
          your home.
        </p>
        <p>
          All our meals are expertly crafted just in time, using only the
          highest quality ingredients and carefully prepared by experienced
          chefs who prioritize flavor and freshness.
        </p>
      </section>
    </>
  );
};

export default MealsSummary;
