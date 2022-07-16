import { React } from 'react';
import Title from '../Title/Title'

function Filter({reviews }) {

console.log(reviews)



    if (reviews?.length > 0) {
        let filter = reviews.map((review, i) => 
          <Title key={review.id} review={review} />
          );
        console.log(filter)
        return (
          
           <div className="filter">{filter}</div>
          
        )
      }
       
        }







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

 
export default Filter;
