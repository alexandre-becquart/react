import React, { Component } from 'react';
// import {Component} from 'react';
import { getFunName } from '../helpers'


class StorePicker extends Component {

    myInput = React.createRef();

    // constructor() {
    //     super();
    //     this.gotoStore = this.gotoStore.bind(this)
    // }

    gotoStore = (e) => {
        e.preventDefault()
        console.log(this.myInput);
        console.log(this.myInput.current);
        console.log(this.myInput.current.value);

        const storeName = (this.myInput.current.value);
        this.props.history.push(`/store/${storeName}`)
    }

    render() {

        return (

            // <section className="code">
            //     <div>test</div>
            //     <p>heyoii</p>
            // </section>

            /* ------------------------ pas de balise englobante ------------------------ */
            /* ------------------------ utiliser <React.Fragment> ----------------------- */

            // test de commentaire

            // <React.Fragment>
            //     <div>
            //         {/* test de commentaire */}
            //         <div>test</div>
            //         <p className="code">Heyoiii</p>
            //     </div>

            // </React.Fragment>

            /* -------------------------------------------------------------------------- */


            <form className="store-selector" onSubmit={this.gotoStore}>
                <h2>Please Enter a Store</h2>
                {/* <button onClick={this.handleClick}>Click Me</button> */}
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store name"
                    defaultValue={getFunName()} />
                <button type='submit'>Visite Store</button>
            </form>

        )
    }

}

export default StorePicker