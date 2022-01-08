import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    render() {


        const { cartList } = this.props
        return (

            <div className='cart'>
                <div>
                    <h4>Total:$1500</h4>
                </div>
                {
                    cartList.map(item => {
                        return (
                            <div key={item.pro_id}>
                                <CartItem eachItem={item} />
                            </div>
                        )
                    })
                }
                <div className='mt-3'>
                    <button type='Submit' className='btn btn-success'>
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        );
    }
}

export default Cart;