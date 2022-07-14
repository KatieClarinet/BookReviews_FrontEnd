import { React} from 'react';
import Title from '../Title/Title'
// import ListGroup from 'react-bootstrap/ListGroup';

function Filter({theReview, setTheReview}) {

// const [listVisible, setListVisible] = useState(true);
console.log(theReview)

//think i need to use a ternary statement in jsx rather than an if statement

    if (theReview?.length > 0) {
        let filter = theReview.map((review, i) => 
          <Title key={review.id} review={review} />);
        
        return (
          <div>{filter}</div>
        )
      }
       
  //       return (
  //   //       <div>
  //   //   <ul>
  //   //     {theReview.map((item, i) => {
  //   //       return <li key={i}>{item.title} {item.author}</li>
  //   //     })}
  //   //   </ul>
  //   // </div>
  // );
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
