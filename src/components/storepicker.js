import React, { Component } from 'react';
// import {Component} from 'react';


class StorePicker extends Component {

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


            <form className="store-selector">
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store name" />
                <button type='submit'>Visite Store</button>
            </form>

        )
    }

}

export default StorePicker