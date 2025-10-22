import React from "react";

const MealsItem = ({meal}) => {
  return <div>
    <h3>{meal.name}</h3>
    <p>{meal.description}</p>
    <p>{meal.price}</p>
  </div>;
};

export default MealsItem;
