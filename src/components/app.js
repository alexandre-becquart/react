import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import Fish from './fish';


class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="Menu">
                    <Header tagline="Alex Fish shop is the best" />
                    <ul>
                        <Fish />
                        <Fish />
                        <Fish />
                        <Fish />
                        <Fish />
                    </ul>
                </div>
                <Order />
                <Inventory />

            </div>
        );
    }
}

export default App;