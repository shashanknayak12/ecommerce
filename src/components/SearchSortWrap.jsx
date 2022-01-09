import React from 'react';
import Search from './Search';
import SortBy from './SortBy';
function SearchSortWrap({ searchText, handleSearchText, sortBy, handleSort }) {
    return (
        <div className='d-flex justify-content-between search-sort-wrapper'>
            <Search
                searchText={searchText}
                handleSearchText={handleSearchText}

            />
            <SortBy
                sortBy={sortBy}
                handleSort={handleSort}
            />
        </div>
    );
}

export default SearchSortWrap;



