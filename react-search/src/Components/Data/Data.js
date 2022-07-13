import { React} from 'react';
import Title from '../Title/Title';



//filteredReviews = any matching data
//mapped through here and displayed
function BookData({ searchField }) {
    // const [isVisible, setIsVisible] = useState(true);
     //store the review
    // const [theReview, setTheReview] = useState("")
console.log(`${searchField} line 12`)

async function GetReviews() {
    console.log(`${searchField} line 15 searchField`)
       const response = await fetch(`http://localhost:3000/books?title=${searchField}`)
       const data = await response.json();
       //data.payload[0].author WORKS!!
       console.log(`${data.payload[0]} + line 18 allReviews`)
       const matchingReviews = data.payload;
       console.log(`${matchingReviews} + line 21`)
       //filter data here rather than mapping as it's an object
    // const filtered = matchingReviews.map((search) => (
    //  <Title key={search.id} search={search}/>
    //  ))
    //  console.log({filtered});
const filtered = matchingReviews.filter( async function(review) {
    return review.author.includes(searchField);
});
console.log(filtered);

}
GetReviews()
}

// return (
//     <div>
//     <p>{matchingReviews.title}</p>
   
//     </div>
// )
// }
//        } 
// GetReviews();


//     return (
// <>
//    <div className="list-container" >
//       <Title matchingReviews={matchingReviews} />
//    </div>
// </>
//     )
// }



export default BookData;