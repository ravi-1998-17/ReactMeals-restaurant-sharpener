import Input from "@/components/UI/Input";
import React, { useRef, useState } from "react";
import classes from "@/components/Meals/MealsItem/MealItemForm.module.css";

const MealItemForm = () => {
  const [qty, setQty] = useState(1);

  const onChnageHandler = (e) => {
    console.log(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: qty,
        }}
        onChange={onChnageHandler}
      />
      <button
        type="button"
        onClick={() => setQty((prev) => Math.min(prev + 1, 5))}
      >
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
