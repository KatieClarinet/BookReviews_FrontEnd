import { useState, React, useEffect} from 'react';
// import Review from "../Review/Review"
import ListGroup from 'react-bootstrap/ListGroup';

function Title({theReview, setTheReview}) {
// const [reviewShown, setReviewShown] = useState(false);
// const [listVisible, setListVisible] = useState(true);
console.log(theReview)

//think i need to use a ternary statement in jsx rather than an if statement

useEffect(() => {

    if (theReview?.length > 0) {
        theReview
        .filter((review) => review)
        .map((filteredReview) => (
        console.log(`${filteredReview.title} line 13`)
            // setTheReview(filteredReview.author) 
            ))   
        }
        
    }, []);

console.log(theReview)
return (
    <div>
      {theReview.title}
    </div>
  );





// console.log(Object.values(theReview));
// const result = Object.values(theReview).filter(value => {
//     console.log(value.title);
//     return value.title
// });
// console.log(result);



//     return(

//     <><div className="list-container" style={{ visibility: listVisible ? 'visible' : 'hidden' }}>



//                 <ListGroup>
//                     <ListGroup.Item
//                     // onClick={handleClick}
//                     >
//                         {filteredReview.title}
//                     </ListGroup.Item>
//                 </ListGroup>
//             ))}
//         </div><div>
//                 {/* {reviewShown
//                  && <Review review={theReview} />} */} */}
//             </div></>
   
//     )

 }
export default Title;
