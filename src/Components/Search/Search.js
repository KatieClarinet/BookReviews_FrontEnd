import React, { useState } from 'react';
import FetchData from '../FetchData/FetchData';

function Search() {
    const [searchField, setSearchField] = useState("");
    //only show matching search results once user starts typing
    const [searchShow, setSearchShow] = useState(false);
   
//here i need to store the user input
    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
          }
          else {
            setSearchShow(true);
          }
    };

    function Data() {
            if (searchShow) {
        return (
                <FetchData searchField={searchField} />
            
        );
            }
    }
    return(
        <>
            <div>
                <img className="logo" src="https://live.staticflickr.com/65535/51860259596_1a1a8afb3f_w.jpg" alt="becksbookreviews logo" />
           </div>
           
        <div>
                <input className="search"
                    type="search"
                    placeholder="Search by author or title..."
                    onChange={handleChange}/>
        </div>
            {Data()}
        </>
    )
}

export default Search;