import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Aux from "../../hoc/Aux/Aux";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.values(ingredients)
            .reduce((acc, curr) => acc + curr, 0);
        
        this.setState({ purchaseable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1;
        const newIngredients = {
            ...this.state.ingredients,
            [type]: newCount
        };

        this.setState({
            totalPrice: this.state.totalPrice + INGREDIENTS_PRICES[type],
            ingredients: newIngredients
        });

        this.updatePurchaseState(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] - 1;

        if (newCount < 0) {
            return;
        }
        
        const newIngredients = {
            ...this.state.ingredients,
            [type]: newCount
        };

        this.setState({
            totalPrice: this.state.totalPrice - INGREDIENTS_PRICES[type],
            ingredients: newIngredients
        });

        this.updatePurchaseState(newIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disable={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;