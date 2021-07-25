import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ title, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1> {title} </h1>
            <img src={image} alt="" className={style.image} />
            <ol className={style.list}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;