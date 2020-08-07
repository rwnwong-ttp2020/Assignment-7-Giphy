import React from "react";
import './style.css'
const Search = ({value, onChange, onSearch}) => {
    return (
        <div className = "search">
            <h1>Gif Search</h1>
            <input value={value} onChange={onChange} />
            <button onClick={onSearch}>Search</button>
        </div>

    );
};

export default Search;