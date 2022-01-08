import React, { Component } from 'react';
import Card from './Card';

function ShopingContainer({ productList }) {
    return (

        <div>
            {
                productList.map(((product) => {
                    return (
                        <div key={product.pro_id} className='row'>
                            <div className='col'>
                                <Card product={product} />
                            </div>
                        </div>
                    )
                }))
            }
        </div>
    )
}
export default ShopingContainer;