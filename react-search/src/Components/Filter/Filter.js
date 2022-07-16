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

 
export default Filter;
