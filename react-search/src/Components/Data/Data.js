import { useState, React, useEffect} from 'react';
import Title from '../Title/Title';

//filteredReviews = any matching data
//mapped through here and displayed
function BookData({ searchField }) {
    // const [isVisible, setIsVisible] = useState(true);
     //store the review
const [theReview, setTheReview] = useState("")
console.log(`${searchField} line 12`)

useEffect(() => {
    async function GetReviews() {
        // console.log(`${searchField} line 15 searchField`)
        const response = await fetch(`http://localhost:3000/books?title=${searchField}`)
        const data = await response.json();
        //data.payload[0].author WORKS!!
        //    console.log(`${data.payload[0]} + line 18 allReviews`)
        const matchingReviews = data.payload;
            console.log(`${matchingReviews} + line 21`)
        setTheReview(matchingReviews)
    }
    GetReviews();
}, [searchField]);

console.log(theReview);
    return (
<>
   <div className="list-container" >
      <Title theReview={theReview} searchField={searchField} />
   </div>
</>
    )
}

export default BookData;