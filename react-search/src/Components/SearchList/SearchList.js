import { React} from 'react';
import Title from '../Title/Title';



//filteredReviews = any matching data
//mapped through here and displayed
function SearchList({ filteredReviews}) {
    // const [isVisible, setIsVisible] = useState(true);

    const filtered = filteredReviews.map((review) =>
    <Title key={review.id} review={review}/>);
    console.log({filteredReviews})
    return (
   <div className="list-container" >
       {filtered}
   </div>
     
    )
}



export default SearchList;