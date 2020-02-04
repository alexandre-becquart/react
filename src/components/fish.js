import React from 'react';

class Fish extends React.Component {
    render() {
        return (
            <li className="menu-fish">
                <img src="/images/crab.jpg" alt="crab" />
                <h3 className="fish-name">
                    KING CRAB
                   <span className="price">10</span>
                </h3>
                <p>Description détaillée</p>
                <button>Add to order</button>
            </li>
        )
    }
}

export default Fish;