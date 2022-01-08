import React, { Component } from 'react';
import Card from './Card';

function ShopingContainer({ productList }) {
    return (

        <div className='d-flex mt-4 ms-4 me-4 justify-content-between'>
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
        </div >
    )
}
export default ShopingContainer;