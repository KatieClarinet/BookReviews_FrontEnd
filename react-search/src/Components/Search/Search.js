import React, { useEffect, useState } from 'react';
// import Scroll from '../Scroll/Scroll';
// import SearchList from '../SearchList/SearchList';
import axios from 'axios'
import Title from '../Title/Title'

//details = bookData
function Search() {
    //store the user input
    const [searchField, setSearchField] = useState("");
    //only show matching search results once user starts typing
    const [searchShow, setSearchShow] = useState(false);
    //store the review
    const [review, setReview] = useState("")

    const handleChange = e => {
        setSearchField(e.target.value);
        e.preventDefault();
        if(e.target.value===""){
            setSearchShow(false);
          }
          else {
            setSearchShow(true);
          }
    };

useEffect(() => {
    //fetching the data from the database
    async function getReviews() {
        axios
        .get(`http://localhost:3000/books?title=${searchField}`)
        .then((response) => {
            const searchedReview = response.data.payload;
            console.log(searchedReview)
            setReview(searchedReview);
        })
        
    } getReviews();
}, [searchField])   
console.log(review);

        function searchList() {
            if (searchShow) {
        return (
                <>
                 <Title review={review} />
                </>                
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