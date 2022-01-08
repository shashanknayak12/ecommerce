import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const { eachItem } = this.props
        return (
            <div className='cart-card'>

                <div className='d-flex'>
                    <div>
                        <img className='cart-img-left' src={eachItem.imgURL} alt={eachItem.name} />
                        <div className='cart-title'>
                            {eachItem.pro_name}
                        </div>
                    </div>


                    < div className='cart-text'>
                        <h5>{eachItem.desc}</h5>
                        <p>Price:{eachItem.price}</p>
                    </div>




                </div>
                <div>
                    <label>
                        Qty:<input type='number' value={eachItem.qty} />

                    </label>

                    <button className='btn btn-danger'>Delete</button>
                </div>





            </div>
        );
    }
}

export default CartItem;