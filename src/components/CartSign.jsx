import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
class CartSign extends Component {


    handleShowCart = (e) => {
        console.log(e.target.value)

    }

    render() {
        const { showCart } = this.props
        return (
            <div className='cart-sign' >
                <div>
                    <i onClick={this.handleShowCart} value={showCart} className="fa fa-cart-plus"></i>

                </div>
            </div>
        );
    }
}

export default CartSign;