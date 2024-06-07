import React, { useState } from 'react'
import "./search.css"

const Search = () => {

const [searches, setSearches] =useState('')

  return (
    <div className="search-page">
        <div className='loggedin-search'>
            <figure>{search}</figure>
            <input type="search" name="" id="" placeholder='Search'/>
        </div>
        <p className="recent-text">
            <h5>Recent searches</h5>
        </p>
        <div className="recent-search">
            {searches?"":<span className='non'>you've not made any recent search.</span>}
        </div>
    </div>
  )
}

export default Search;

const search = <svg xmlns="http://www.w3.org/2000/svg" fill='orange'  viewBox="0 0 64 64" width="28px" height="28px"><path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"/></svg>