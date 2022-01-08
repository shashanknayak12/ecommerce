import React, { Component } from 'react';
import CartSign from './CartSign';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>E-Commerce</h1>
                <CartSign />
            </div>
        );
    }
}

export default Header;
