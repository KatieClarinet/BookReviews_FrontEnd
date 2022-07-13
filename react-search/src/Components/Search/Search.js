import React, {useState } from 'react';
// import Scroll from '../Scroll/Scroll';
import SearchList from '../SearchList/SearchList';
// import axios from 'axios'
// import Title from '../Title/Title'

//details = bookData
function Search() {
    //store the user input
    const [searchField, setSearchField] = useState("");
    //only show matching search results once user starts typing
    const [searchShow, setSearchShow] = useState(false);
    //store the review
    const [theReview, setTheReview] = useState("")

    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
          }
          else {
            setSearchShow(true);
          }
           getReviews();
    };

     async function getReviews() {
            const response = await fetch(`http://localhost:3000/books?title=${searchField}`)
            const allReviews = await response.json();
            const filteredReviews = allReviews.payload;
            console.log(filteredReviews)
            setTheReview(filteredReviews);
            searchList(theReview)
            // return (
            //     // <p>
            //     // {filteredReviews.map(
            //     //     ({ id, author, title, image }) => 
            //     //     <p>{author}</p>
            //     // )}
            //     // </p>
            // )
           
            } 

            function searchList() {
                // if (searchShow) {
                    
            return (
                    <>
                     <SearchList theReview={theReview} />
                    </>                
            );
                }     
        // }
        console.log(theReview);
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
           
            {/* {searchList()} */}
            
            </>
    )
}

export default Search;