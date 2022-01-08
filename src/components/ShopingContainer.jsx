import React from 'react';
import CardList from './CardList';

import SearchSortWrap from './SearchSortWrap';


function ShopingContainer({ productList, searchText, handleSearchText, sortBy, onSearch }) {


    return (
        <div>
            <div >
                <SearchSortWrap
                    searchText={searchText}
                    handleSearchText={handleSearchText}
                    sortBy={sortBy}
                    onSearch={onSearch}
                />

            </div>

            <CardList productList={productList} />
            <CardList productList={productList} />

        </div>


    )
}
export default ShopingContainer;