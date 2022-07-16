import React, {useState } from 'react';
import FetchData from '../FetchData/FetchData'

function Search() {
    //store the user input
    const [searchField, setSearchField] = useState("");
    //only show matching search results once user starts typing
    //currently not using this as it's causing problems
    const [searchShow, setSearchShow] = useState(false);
   

//here i need to store the user input
    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value==="")
        {
            setSearchShow(false);
            console.log('no input')
          }
          else {
            setSearchShow(true);
        console.log('yes input')
          }
          console.log(`${searchField} line 28 searchField`);
    };
            function Data() {
                if (searchShow) 
                {
            return (
                     <FetchData searchField={searchField} />      
            );
                }  
            }
     
    return(
        <>
        <div className="header">
        <img src="https://live.staticflickr.com/65535/51860259596_1a1a8afb3f_w.jpg" alt="becksbookreviewslogo" />
           </div>
           
        <div>
                <input className="search"
                    type="search"
                    placeholder="Search by author or title..."
                    onChange={handleChange}
                    />
        </div>
            {Data()}
            
        </>
    )
}


export default Search;