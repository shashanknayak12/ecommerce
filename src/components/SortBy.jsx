import React from 'react';

function SortBy({ sortBy, handleSort }) {
    return (
        <div className='sort-by'>
            <select onChange={handleSort} className="form-select" aria-label="Default select example">
                <option >Open this select menu</option>
                <option value='price-low-high'>Price-Low-High</option>
                <option value='price-high-low'>Price-High-Low</option>

            </select>
        </div>
    );
}

export default SortBy;