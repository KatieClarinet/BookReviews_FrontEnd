import React from 'react';
import Card from '../Card/Card';

function SearchList({ filteredReviews}) {
    const filtered = filteredReviews.map(review => <Card key={review.id} review={review} />);
    return (
        <div>
            {filtered}
        </div>
    )
}

export default SearchList;