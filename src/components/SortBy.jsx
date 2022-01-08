import React from 'react';

function SortBy({ sortBy }) {
    return (
        <div className='sort-by'>
            <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value={sortBy}>Price-Low-High</option>
                <option value={sortBy}>Price-High-Low</option>

            </select>
        </div>
    );
}

export default SortBy;