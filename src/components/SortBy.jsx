import React from 'react';

function SortBy() {
    return (
        <div className='sort-by'>
            <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option>Laptop</option>
                <option>Mobile</option>
                <option>Smart Watch</option>
                <option>Camera</option>
            </select>
        </div>
    );
}

export default SortBy;