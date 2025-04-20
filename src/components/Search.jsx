/* eslint-disable no-unused-vars */
import React from 'react'
import searchIcon from '../assets/search.png';

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src={searchIcon} alt="search" />
            <input 
                type="text"
                placeholder='Search Your Movies'
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
