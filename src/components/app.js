import React from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';
import Fish from './fish';
import sampleFishes from '../sample-fishes';
import base from '../base'


class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };


    componentDidMount() {
        const { params } = this.props.match
        const localStorageRef = localStorage.getItem(params.storeId)

        if (localStorage) {
            this.setState({ order: JSON.parse(localStorageRef) })
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }

    componentDidUpdate() {
        console.log('COMPONENT UPDATE');
        console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }

    addFish = fish => {
        console.log("addFish", fish);
        // copy l'élement sur lequel je travaille
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });


    }

    addToOrder = (key) => {
        // crée un copy du state
        const order = { ...this.state.order };
        // ajouter ou faire évoluer la quantité
        order[key] = order[key] + 1 || 1
        //pour mettre à jour fish
        this.setState({ order });
    }

    loadSampleFishes = () => {
        //alert("Loading sample fishes");
        this.setState({ fishes: sampleFishes });
    }


    render() {
        return (
            <div className="catch-of-the-day">
                <div className="Menu">
                    <Header tagline="Alex Fish shop is the best" />
                    <ul>
                        {
                            Object.keys(this.state.fishes).map(key => (
                                <Fish
                                    key={key}
                                    details={this.state.fishes[key]}
                                    addToOrder={this.addToOrder}
                                    index={key} />
                            ))
                        }

                    </ul>
                </div>
                <Order order={this.state.order} fishes={this.state.fishes} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />


            </div>
        );
    }
}

export default App;