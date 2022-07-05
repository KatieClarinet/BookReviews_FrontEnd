import React from 'react';
import Card from '../Card/Card';


//filteredReviews = any matching data
//mapped through here and displayed
function SearchList({ filteredReviews}) {
    const filtered = filteredReviews.map((review) =>
    <Card key={review.id} review={review} />);
    console.log({filteredReviews})
    console.log({})
    return (
        <div>
            {filtered}
        </div>
    )
}



export default SearchList;