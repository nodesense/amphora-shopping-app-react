// Header.js
import React from 'react';

import {NavLink} from 'react-router-dom';

// properties aka props are passed as first parameter. object
function Header(props) {
    console.log('Header called', props);

    // props are immutable, mark the properties read only
    // props.title = "Hello" // React error
    // deconstruct     const title = props.title
    const {title} = props;

    // child should not modify the props data
    
    // title = "something"; // es6 lang error

    return (
        <div>
            <h2>{title}</h2>

            <NavLink to="/" 
                     className="button" 
                     activeClassName="success" 
                     exact>
                Home
            </NavLink>

            <NavLink to="/products" className="button" activeClassName="success">
                Products
            </NavLink>

            <NavLink to="/cart" className="button" activeClassName="success">
                Cart
            </NavLink>

            <NavLink to="/checkout" className="button" activeClassName="success">
                Checkout
            </NavLink>

            <NavLink to="/login" className="button" activeClassName="success">
                Login
            </NavLink>

            <hr />
        </div>
    )
}

export default Header;