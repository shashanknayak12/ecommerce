import React, { Component } from 'react';
import Cart from './Cart';
import CartSign from './CartSign';

class Header extends Component {

    render() {
        const { showCart, handleShowCart } = this.props
        return (
            <div className='header'>
                <h1>E-Commerce</h1>
                <CartSign showCart={showCart} handleShowCart={handleShowCart} />

            </div>
        );
    }
}

export default Header;
