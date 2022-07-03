import React from 'react';

function Card({review}) {
    return(
        <div className="main">
        <div className="card">
            <h2>{review.title}</h2>
            <h3>{review.author}</h3>
            <p>{review.review}</p>
        </div>
        </div>
    )
}

export default Card;
