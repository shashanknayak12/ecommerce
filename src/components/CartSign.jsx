import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class CartSign extends Component {




    render() {
        const { handleShowCart } = this.props
        return (
            <div className='cart-sign' >
                <div>
                    <i onClick={handleShowCart} className="fa fa-cart-plus"></i>

                </div>
            </div>
        );
    }
}

export default CartSign;