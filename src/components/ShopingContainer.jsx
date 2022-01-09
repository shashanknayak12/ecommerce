import React from 'react';
import CardList from './CardList';

import SearchSortWrap from './SearchSortWrap';


function ShopingContainer({ productList, searchText, handleSearchText, sortBy, handleSort, handleAddCart }) {


    return (
        <div>
            <div >
                <SearchSortWrap
                    searchText={searchText}
                    handleSearchText={handleSearchText}
                    sortBy={sortBy}
                    handleSort={handleSort}
                />

            </div>

            <CardList
                productList={productList}
                handleAddCart={handleAddCart}
            />

        </div>


    )
}
export default ShopingContainer;