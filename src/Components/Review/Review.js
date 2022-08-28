import "./Review.css"

function Review({ review }) {
    return (
        <>
            <br></br>
            <div className="review-container">
                <div>
                    <img
                        className="book-image"
                        src={review.image}
                        alt="review"
                    />
                </div>
                <div className="review-text">
                    <h1>{review.title}</h1>
                    <h2>{review.author}</h2>
                    <p className="text-wrapper">{review.review}</p>
                </div>
            </div>
            <br></br>
        </>
    );
}

export default Review;
