import React from 'react';
import Search from './Search';
import SortBy from './SortBy';
function SearchSortWrap({ searchText, handleSearchText, sortBy, onSearch }) {
    return (
        <div className='d-flex justify-content-between search-sort-wrapper'>
            <Search
                searchText={searchText}
                handleSearchText={handleSearchText}
                onSearch={onSearch}
            />
            <SortBy
                sortBy={sortBy}
            />
        </div>
    );
}

export default SearchSortWrap;



