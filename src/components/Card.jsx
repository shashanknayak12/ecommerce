import React, { Component } from 'react';

function Card({ product }) {
    console.log(product.imgURL)
    return (
        <div className='card'>
            <img className='card-img-top' src={product.imgURL} alt={product.name} />
            <div className='card-title'>
                {product.pro_name}
            </div>
            < div className='card-text'>
                <p>{product.desc}</p>
                <p>{product.price}</p>
            </div>

        </div>
    )


}

export default Card;