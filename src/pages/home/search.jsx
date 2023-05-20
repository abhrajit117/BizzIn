import "./home.css";
import React from 'react'
import Searchicon from '../../assets/search.svg'
const Search = () => {
    return (
        <div class="search-container">
            <input style={{
                backgroundImage: `url(${Searchicon})`, padding: '0 12vw'
            }} type="text" placeholder="Search for Businesses..." />
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>

    )
}
export default Search