import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { searchText, handleSearchText } = this.props
        return (
            <div className="search-text">
                <form className="d-flex">
                    <input
                        onChange={handleSearchText}
                        className="form-control me-2"
                        type="search"
                        value={searchText}
                        placeholder="Search by product name"
                        aria-label="Search" />

                </form>

            </div>
        );
    }
}

export default Search;