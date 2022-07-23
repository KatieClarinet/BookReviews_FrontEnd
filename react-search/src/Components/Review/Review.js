

function Review({review}) {

return(
    <>
    <br></br><div className="review-container">
        <div className="book-image">
            <img src={review.image} alt="review" />
        </div><div className="book-text">
            <h1>{review.title}</h1>
            <h2>{review.author}</h2>
            <p className="msg-wrapper">{review.review}</p>

        </div>
    </div><br></br></>
    
)

}

export default Review;