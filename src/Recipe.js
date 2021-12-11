import React from "react";
import style from './recipes.module.css'

const Recipe = ({ label, calories, image, ingredients }) => {
  // const mapAPI = () => {
  //   ingredients.map((ingredient) => <li>{ingredient.text}</li>);
  // };
  return (
    <div className={style.recipe}>
      <h1>{label}</h1>
      <ol>
          {/* <li>{mapAPI}</li> */}
      { ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
      </ol>
      <p>Calories- {calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
