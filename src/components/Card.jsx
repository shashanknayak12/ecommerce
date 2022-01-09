import React, { Component } from 'react';

function Card({ product, handleAddCart }) {
    console.log(product.imgURL)
    return (
        <div className='card'>
            <img className='card-img-top' src={product.imgURL} alt={product.name} />
            <div className='card-title'>
                {product.pro_name}
            </div>
            < div className='card-text'>
                <h5>{product.desc}</h5>
                <p>{product.price}</p>
            </div>
            <button onClick={handleAddCart} className='btn btn-primary'>Add To Cart</button>

        </div>
    )


}

export default Card;