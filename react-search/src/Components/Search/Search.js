import React, { useState } from 'react';
import Scroll from '../Scroll/Scroll';
import SearchList from '../SearchList/SearchList';

function Search({ details }) {
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false); 

    const filteredReviews = details.filter(
        review => {
            return(
                review
                .author 
                .toLowerCase()
                .includes(searchField.toLowerCase()) ||
                review
                .title
                .toLowerCase()
                .includes(searchField.toLowerCase())
            );
        }
    )

    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
          }
          else {
            setSearchShow(true);
          }
    };

    function searchList() {
            if (searchShow) {
        return (
            <Scroll>
                <SearchList filteredReviews={filteredReviews} />
            </Scroll>
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
        
            {searchList()}
            </>
    )
}

export default Search;