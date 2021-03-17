import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map((key) => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
                </li>
            );
        });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button type="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button type="Success" clicked={props.continue}>CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;