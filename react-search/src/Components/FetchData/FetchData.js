import { useState, React, useEffect} from 'react';
import Filter from '../Filter/Filter';


//filteredReviews = any matching data
//mapped through here and displayed
function FetchData({ searchField }) {
    // const [isVisible, setIsVisible] = useState(true);
     //store the review
const [reviews, setReviews] = useState("")
console.log(`${searchField} line 12`)

useEffect(() => {
    async function GetReviews() {
        const response = await fetch(`http://localhost:3000/books?title=${searchField}`)
        const data = await response.json();
        const matchingReviews = data.payload;
            console.log(`${matchingReviews} + line 21`)
        setReviews(matchingReviews)
    }
    GetReviews();
}, [searchField]);

console.log(reviews);
    return (

   <div className="list-container1" >
      <Filter reviews={reviews} />
      
   </div>

    )
}

export default FetchData;