import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    calculatePrice = (cartList) => {
        let total = 0
        for (let i = 0; i < cartList.length; i++) {
            const eachCartItem = cartList[i]
            total = total + (eachCartItem.price * eachCartItem.qty)
        }

        return total
    }


    render() {


        const { cartList, handleDelete, handleQty } = this.props
        const total = this.calculatePrice(cartList)

        return (

            <div className='cart'>
                <div>
                    <h4>Total:{total}</h4>
                </div>
                {
                    cartList.map((item, index) => {
                        return (
                            <div key={index}>
                                <CartItem
                                    eachItem={item}
                                    handleDelete={() => handleDelete(index)}
                                    handleQty={handleQty} />
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