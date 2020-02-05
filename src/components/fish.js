import React from 'react';
import { formatPrice } from '../helpers'


class Fish extends React.Component {

    handleClick = e => {
        this.props.addToOrder(this.props.index)
    }

    render() {
        const { image, name, price, desc, status } = this.props.details
        const isAvailable = status === "available"


        return (
            <li className="menu-fish">
                <img src={image} alt="crab" />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
                    {!isAvailable ? 'Sold OUT' : 'Add To order'}
                </button>
            </li>
        )
    }
}

export default Fish;

// var tab = ['un', 'deux', 'trois'];

// tab.forEach(function (element, index) {
//   console.log('index:', index, 'valeur:', element);
// });