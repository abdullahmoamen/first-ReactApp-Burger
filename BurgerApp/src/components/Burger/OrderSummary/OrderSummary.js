import React ,{Component} from 'react';

import Aux from '../../../hoc/_Aux/_Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate(){
        console.log("orderSummery");
    }

    render(){
        const ingredientSummary = Object.keys( this.props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
                );
        })
        let styles={textAlign: 'center' , fontFamily:'cursive', listStyleType:'none'}
        return (
            <Aux>
            <h3 style={styles}>Your Order !</h3>
            <p style={styles}>A delicious burger with the following ingredients:</p>
            <ul style={styles}>
                {ingredientSummary}
            </ul>
            <p style={styles}><strong>Total Price: {this.props.price.toFixed(2)}</strong> $</p>
            <p style={styles}>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
}


export default OrderSummary;