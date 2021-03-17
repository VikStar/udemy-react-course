import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
        .map((key) => {
            return [...Array(props.ingredients[key])]
                .map((_, i) => <BurgerIngredient key={key + i} type={key} />)
        })
        .reduce((arr, el) => arr.concat(el), []);

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients!</p>
    }
        
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;