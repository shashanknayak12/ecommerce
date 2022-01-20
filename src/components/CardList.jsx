import React, { Component } from 'react';
import Card from './Card';

function CardList({ productList, handleAddCart }) {
    return (

        <div className='d-flex flex-wrap mt-4 ms-4 me-4'>
            {
                productList.map(((product) => {
                    return (

                        <div key={product.pro_id} className='row'>
                            <div className='col'>
                                <Card
                                    product={product}
                                    handleAddCart={() => handleAddCart(product.pro_id)}
                                />
                            </div>
                        </div>


                    )
                }))
            }
        </div >
    )
}

export default CardList;