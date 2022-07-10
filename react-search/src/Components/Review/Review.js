

function Review({review}) {

return(
    <div className="review-container">
    <div className="book-image">
        <img src={review.image} alt="review"/>
    </div>
        <div className="book-text">
            <h1>{review.title}</h1>
            <h2>{review.author}</h2>
            <p>{review.review}</p>
        </div>
        </div>
    
)

}

export default Review;