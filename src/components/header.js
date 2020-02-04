import React from 'react';

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top" >
//                 <h1> Catch
//                 <span className="of" > of </span>
//                     <span className="th" > the </span>
//                     day </h1>
//                 <h3 className="tagline" >
//                     <span> {this.props.tagline} </span>
//                 </h3 >
//             </header>
//         )
//     }
// }

// function Header(props) {

//     return (
//         <header className="top" >
//             <h1> Catch
//                 <span className="of" > of </span>
//                 <span className="th" > the </span>
//                 day </h1>
//             <h3 className="tagline" >
//                 <span> {props.tagline} </span>
//             </h3 >
//         </header>
//     )

// }

const Header = ({ tagline }) => (


    <header className="top" >
        <h1> Catch
                <span className="of" > of </span>
            <span className="th" > the </span>
            day </h1>
        <h3 className="tagline" >
            <span> {tagline} </span>
        </h3 >
    </header>
)

export default Header;