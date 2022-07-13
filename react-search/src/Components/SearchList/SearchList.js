import { React} from 'react';
import Title from '../Title/Title';



//filteredReviews = any matching data
//mapped through here and displayed
function SearchList({ theReview }) {
    // const [isVisible, setIsVisible] = useState(true);
console.log(theReview)
    const filtered = theReview.map((search) => (
    <Title key={search.id} search={search}/>
    ))
    console.log({filtered});

    return (

   <div className="list-container" >
      <Title filtered={filtered} />
   </div>
     
    )
}



export default SearchList;